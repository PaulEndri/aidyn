import Context from "./Context";
import { Message } from "discord.js";
import IProcessor from "../Interfaces/IProcessor";
import Logs, { ILogsModel } from "../Database/Models/Logs";

export default class Processor implements IProcessor {
    static DELAY_TIMER = 300;

    public Context : Context;
    public DbInUse : boolean;
    public Loaded  : boolean;
    public Logging : number;
    public Prefix  : string;
    public Owner   : string;

    constructor(context: Context, prefix = '!', owner: string,logging = 0) {
        this.Context  = context;
        this.Prefix   = prefix;
        this.Loaded   = false;
        this.Logging  = logging;
        this.Owner    = owner;
    }

    public async SaveLogs(log: ILogsModel): Promise<boolean> {
        if (this.DbInUse === false) {
            return false;
        }

        if (this.Logging >= 2 || (this.Logging === 1 && log.Command)) {
            await log.save();

            return true;
        }

        return false;
    }

    public async Handle(message: Message): Promise<any> {
        const logs  = new Logs();
        const start = new Date().getTime();

        logs.User    = message.author.username;
        logs.Channel = message.channel.id

        try {
            let result;

            if (this.Context.Loading === true) {
                console.log('[WARNING] Message Received before Data is loaded, delaying');
                setTimeout(() => this.Handle(message), Processor.DELAY_TIMER);

                return;
            }

            if (message.content.indexOf(this.Prefix) !== 0) {
                return Promise.resolve('');
            }

            const name = message.content.split(' ').shift().substr(1);
            const isValid = this.Context.LoadedCommands[name.toLowerCase()];

            if (isValid) {
                logs.Command  = name.toLowerCase();

                result = await this.Context.LoadedCommands[name.toLowerCase()].Call(message, message.author.id === this.Owner);
            }


            logs.Runtime = new Date().getTime() - start;
            logs.Success = true;

            await this.SaveLogs(logs);

            return result
        } catch(e) {
            logs.Runtime  = new Date().getTime() - start;
            logs.Success  = false;
            logs.Response = e.message;

            await this.SaveLogs(logs);
            console.error('[Fatal Error]', e)

            return Promise.reject(e);
        }
    }
}