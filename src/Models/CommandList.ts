import { ICommandList } from '../Interfaces/ICommandList';
import { Command } from '../Abstractions/Command';

export class CommandList implements ICommandList {
	[name: string]: Command;
}
