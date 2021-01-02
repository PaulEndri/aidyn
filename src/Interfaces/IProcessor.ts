import { IContext } from './IContext';
import { Message } from 'discord.js';
import { ILogsModel } from '../Database/Models/Logs';

export interface IProcessor {
	Context: IContext;
	Loaded: boolean;
	Logging: number;
	Prefix: string;
	Owner: string;

	Handle: (message: Message) => Promise<any>;
	SaveLogs: (log: ILogsModel) => Promise<boolean>;
}
