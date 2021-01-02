import { IState } from './IState';
import { Client } from 'discord.js';
import { ICommandList } from './ICommandList';

export interface IContext {
	Client: Client;
	Loading: boolean;
	State: IState;
	Owner: string;
	UseDb: boolean;
	LoadedCommands: ICommandList;
	Prefix: String;
}
