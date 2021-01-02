import { IUsers } from './Database/IUsers';
import { ICommands } from './Database/ICommands';

export interface IState {
	Users: {
		[index: string]: IUsers;
	};
	Commands: {
		[index: string]: ICommands;
	};
}
