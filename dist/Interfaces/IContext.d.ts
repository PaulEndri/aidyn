import IState from "./IState";
import { Client } from "discord.js";
import ICommandList from "./ICommandList";
export default interface IContext {
    Client: Client;
    Loading: boolean;
    State: IState;
    Owner: string;
    UseDb: boolean;
    LoadedCommands: ICommandList;
    Prefix: String;
}
//# sourceMappingURL=IContext.d.ts.map