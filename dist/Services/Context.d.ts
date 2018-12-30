import IContext from '../Interfaces/IContext';
import IState from '../Interfaces/IState';
import { Client as DiscordClient } from 'discord.js';
import ICommandList from "../Interfaces/ICommandList";
import CommandList from "../Models/CommandList";
export default class Context implements IContext {
    Client: DiscordClient;
    Loading: boolean;
    State: IState;
    UseDb: boolean;
    LoadedCommands: CommandList;
    Prefix: string;
    Owner: string;
    constructor(client: DiscordClient, owner: string);
    Initialize(dbString?: string): Promise<any>;
    private LoadCustomCommands;
    private LoadCommandsLocal;
    private LoadCommandsFromDatabase;
    LoadCommands(Commands: any, loadCustomCommands?: boolean): Promise<ICommandList>;
}
//# sourceMappingURL=Context.d.ts.map