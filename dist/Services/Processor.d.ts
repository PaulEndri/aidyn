import Context from "./Context";
import { Message } from "discord.js";
import IProcessor from "../Interfaces/IProcessor";
import { ILogsModel } from "../Database/Models/Logs";
export default class Processor implements IProcessor {
    static DELAY_TIMER: number;
    Context: Context;
    DbInUse: boolean;
    Loaded: boolean;
    Logging: number;
    Prefix: string;
    Owner: string;
    constructor(context: Context, prefix: string, owner: string, logging?: number);
    SaveLogs(log: ILogsModel): Promise<boolean>;
    Handle(message: Message): Promise<any>;
}
