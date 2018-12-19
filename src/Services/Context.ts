import IContext from '../Interfaces/IContext';
import IState from '../Interfaces/IState';
import mongoose from 'mongoose';
import Users from '../Database/Models/Users';
import Commands from '../Database/Models/Commands';
import State from '../Models/State';
import { Client as DiscordClient} from 'discord.js';
import ICommandList from "../Interfaces/ICommandList";
import CommandList from "../Models/CommandList";

const EMPTY_COMMAND = {
    AllowedChannels: [],
    AllowedRoles   : [],
    AllowedUsers   : [],
    Data           : {}
};

export default class Context implements IContext {
    public Client         : DiscordClient;
    public Loading        : boolean;
    public State          : IState;
    public UseDb          : boolean;
    public LoadedCommands : CommandList;
    public Prefix         : string;
    public Owner          : string;

    constructor(client: DiscordClient, owner: string) {
        this.Loading = true;
        this.Client  = client;
        this.Owner   = owner;
    }

    public Initialize(dbString?: string): Promise<any> {
        const conString = dbString || process.env.CONNECTION_STRING;

        if (!conString || conString.length === 0) {
            this.Loading = false;
            this.UseDb   = false;
            console.log('[MISS] No Datbase provided');
            return Promise.resolve(false);
        }

        return mongoose
            .connect(dbString || process.env.CONNECTION_STRING)
            .then(async () => {
                const users         = await Users.find();
                const commands      = await Commands.find();
                const usersState    = {};
                const commandsState = {};

                users.forEach((user) => { 
                    usersState[user.Name] = user;
                })

                commands.forEach((command) => {
                    commandsState[command.Namespace] = command;
                })

                this.State   = new State(commandsState, usersState);
                this.Loading = false;
                this.UseDb   = true;

                return this.Loading;
            })
            .then(() => {
                console.log('[SUCCESS] Database Loaded');

                return Promise.resolve(true);
            })
            .catch((e) => {
                console.error('[ERROR] Database Failed to Load', e);
            })
    }
    
    private async LoadCommandsLocal(Commands: any): Promise<ICommandList> {
        const data = new CommandList();

        Object.keys(Commands).forEach((key: string) => {
            const {AllowedChannels, AllowedRoles, AllowedUsers} = EMPTY_COMMAND;  

            if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
                console.log(`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`);
                return;
            }

            data[key.toLowerCase()]            = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, false);
            data[key.toLowerCase()].BotContext = this;

            console.log('[SUCCESS] Loaded Command', key);
        })

        return data;
    }

    private async LoadCommandsFromDatabase(Commands: any): Promise<ICommandList> {
        const data             = new CommandList();
        const databaseCommands = this.State.Commands;

        Object.keys(Commands).forEach((key: string) => {
            const commandData = databaseCommands[key] || {...EMPTY_COMMAND, Namespace: key};

            const {AllowedChannels, AllowedRoles, AllowedUsers, Data} = commandData;  

            if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
                console.log(`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`);
                return;
            }

            data[key.toLowerCase()]            = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, true);
            data[key.toLowerCase()].Data       = Data;
            data[key.toLowerCase()].BotContext = this;

            console.log('[SUCCESS] Loaded Command', key);
        })

        return data;
    }

    public async LoadCommands(Commands: any): Promise<ICommandList> {
        if (this.Loading === true) {
            const deferred = new Promise((resolve) => setTimeout(resolve, 300));

            await deferred;
        }

        if (this.UseDb) {
            this.LoadedCommands = await this.LoadCommandsFromDatabase(Commands);
        } else {
            this.LoadedCommands = await this.LoadCommandsLocal(Commands);
        }

        
        return this.LoadedCommands;
    }
}