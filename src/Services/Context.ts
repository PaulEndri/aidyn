import { IContext } from '../Interfaces/IContext';
import { IState } from '../Interfaces/IState';
import mongoose from 'mongoose';
import { Users } from '../Database/Models/Users';
import { Commands } from '../Database/Models/Commands';
import { State } from '../Models/State';
import { Client as DiscordClient } from 'discord.js';
import { ICommandList } from '../Interfaces/ICommandList';
import { CommandList } from '../Models/CommandList';
import { GenerateRoleAdmin } from '../Abstractions/Commands/RoleAdmin';
import { ICustomRoleAdminData } from '../Interfaces/ICustomRoleAdminData';
import { Command } from '../Abstractions/Command';

const EMPTY_COMMAND = {
	AllowedChannels: [],
	AllowedRoles: [],
	AllowedUsers: [],
	Data: {}
};

export class Context implements IContext {
	public Client: DiscordClient;
	public Loading: boolean;
	public State: IState;
	public UseDb: boolean;
	public LoadedCommands: CommandList;
	public Prefix: string;
	public Owner: string;

	constructor(client: DiscordClient, owner: string) {
		this.Loading = true;
		this.Client = client;
		this.Owner = owner;
	}

	public Initialize(dbString?: string): Promise<any> {
		const conString = dbString || process.env.CONNECTION_STRING;

		if (!conString || conString.length === 0) {
			this.Loading = false;
			this.UseDb = false;
			console.log('[MISS] No Datbase provided');
			return Promise.resolve(false);
		}

		return mongoose
			.connect(dbString || process.env.CONNECTION_STRING)
			.then(async () => {
				const users = await Users.find();
				const commands = await Commands.find();
				const usersState = {};
				const commandsState = {};

				users.forEach((user) => {
					usersState[user.Name] = user;
				});

				commands.forEach((command) => {
					commandsState[command.Namespace] = command;
				});

				this.State = new State(commandsState, usersState);
				this.Loading = false;
				this.UseDb = true;

				return this.Loading;
			})
			.then(() => {
				console.log('[SUCCESS] Database Loaded');

				return Promise.resolve(true);
			})
			.catch((e) => {
				console.error('[ERROR] Database Failed to Load', e);
			});
	}

	private async LoadCustomCommands(): Promise<any> {
		const namespace = await Commands.findOne({ Namespace: '__CUSTOM__' });
		const commands = namespace.Data;

		Object.keys(commands).forEach((key) => {
			const dbCommand = commands[key];
			let command: any;

			const {
				Type,
				AllowedChannels,
				AllowedRoles,
				AllowedUsers,
				AllowedGuilds,
				Data
			} = dbCommand;

			switch (Type) {
				case 'RoleAdmin':
					const roleData: ICustomRoleAdminData = Data;
					command = GenerateRoleAdmin(
						key,
						roleData.Lead,
						roleData.Role,
						AllowedGuilds[0]
					);
					break;
				default:
					return;
			}

			if (command) {
				this.LoadedCommands[key.toLowerCase()] = new command(
					AllowedChannels,
					AllowedRoles,
					AllowedUsers,
					true
				);
			}
		});
	}

	private async LoadCommandsLocal(Commands: any): Promise<ICommandList> {
		const data = new CommandList();

		Object.entries<Command>(Commands).forEach(([ key, val ]) => {
			if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
				console.log(
					`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`
				);
				return;
			}

			data[key.toLowerCase()] = val;
			data[key.toLowerCase()].BotContext = this;

			console.log('[SUCCESS] Loaded Command', key);
		});

		return data;
	}

	private async LoadCommandsFromDatabase(Commands: any): Promise<ICommandList> {
		throw new Error('DB Loading Commands Currently Unsupported');
		const data = new CommandList();
		const databaseCommands = this.State.Commands;

		Object.keys(Commands).forEach((key: string) => {
			const commandData = databaseCommands[key] || { ...EMPTY_COMMAND, Namespace: key };

			const { AllowedChannels, AllowedRoles, AllowedUsers, Data } = commandData;

			if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
				console.log(
					`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`
				);
				return;
			}

			data[key.toLowerCase()] = new Commands[key](
				AllowedChannels,
				AllowedRoles,
				AllowedUsers,
				true
			);
			data[key.toLowerCase()].Data = Data;
			data[key.toLowerCase()].BotContext = this;

			console.log('[SUCCESS] Loaded Command', key);
		});

		return data;
	}

	public async LoadCommands(Commands: any, loadCustomCommands = false): Promise<ICommandList> {
		if (this.Loading === true) {
			const deferred = new Promise((resolve) => setTimeout(resolve, 300));

			await deferred;
		}

		this.LoadedCommands = await this.LoadCommandsLocal(Commands);

		if (loadCustomCommands) {
			await this.LoadCustomCommands();
		}

		return this.LoadedCommands;
	}
}
