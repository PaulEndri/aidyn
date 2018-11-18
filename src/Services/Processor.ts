import Context from "./Context";
import { Message } from "discord.js";
import ICommandList from "../Interfaces/ICommandList";
import CommandList from "../Models/CommandList";
import IProcessor from "../Interfaces/IProcessor";

const EMPTY_COMMAND = {
    AllowedChannels: [],
    AllowedRoles   : [],
    AllowedUsers   : [],
    Data           : {}
};

export default class Processor implements IProcessor {
    static DELAY_TIMER = 300;

    Commands: CommandList;
    Context : Context;
    Loaded  : boolean;
    Prefix  : string;

    constructor(context: Context, prefix = '!') {
        this.Context  = context;
        this.Prefix   = prefix;
        this.Loaded   = false;
    }

    private async LoadCommandsLocal(Commands: any): Promise<ICommandList> {
        const data = new CommandList();

        Object.keys(Commands).forEach((key: string) => {
            const {AllowedChannels, AllowedRoles, AllowedUsers} = EMPTY_COMMAND;  

            data[key.toLowerCase()] = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, false);

            console.log('[SUCCESS] Loaded Command', key);
        })

        return data;
    }

    private async LoadCommandsFromDatabase(Commands: any): Promise<ICommandList> {
        const data             = new CommandList();
        const databaseCommands = this.Context.State.Commands;

        Object.keys(Commands).forEach((key: string) => {
            const commandData = databaseCommands[key] || {...EMPTY_COMMAND, Namespace: key};

            const {AllowedChannels, AllowedRoles, AllowedUsers, Data} = commandData;  

            data[key.toLowerCase()]      = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, true);
            data[key.toLowerCase()].Data = Data;

            console.log('[SUCCESS] Loaded Command', key);
        })

        return data;
    }

    public async LoadCommands(Commands: any, useDB: boolean): Promise<ICommandList> {
        if (this.Context.Loading === true) {
            const deferred = new Promise((resolve) => setTimeout(resolve, 300));

            await deferred;
        }

        if (useDB) {
            this.Commands = await this.LoadCommandsFromDatabase(Commands);
        } else {
            this.Commands = await this.LoadCommandsLocal(Commands);
        }

        return this.Commands;
    }

    public async Handle(message: Message): Promise<any> {
        try {
            if (this.Context.Loading === true || this.Loaded === false) {
                console.log('[WARNING] Message Received before Data is loaded, delaying');
                setTimeout(() => this.Handle(message), Processor.DELAY_TIMER);

                return;
            }

            if (message.content.indexOf(this.Prefix) !== 0) {
                return Promise.resolve('');
            }

            const name = message.content.split(' ').shift().substr(1);

            console.log('[MESSAGE] Running', name, message.content);

            return await this.Commands[name.toLowerCase()].Call(message);
        } catch(e) {
            console.error('[Fatal Error]', e)
            return Promise.reject(e);
        }
    }
}