import ICommandList from "./ICommandList";
import IContext from "./IContext";
import { Message } from "discord.js";
import { ILogsModel } from "../Database/Models/Logs";

export default interface IProcessor {
    Commands:     ICommandList;
    Context:      IContext;
    Loaded:       boolean;
    Logging:      number;
    Prefix:       string;

    LoadCommands: (Commands: any, useDB: boolean) => Promise<ICommandList>;
    Handle:       (message: Message) => Promise<any>;
    SaveLogs:     (log: ILogsModel) => Promise<boolean>;
}