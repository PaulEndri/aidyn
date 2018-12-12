import Context from "./Context";
import { Message } from "discord.js";
import ICommandList from "../Interfaces/ICommandList";
import CommandList from "../Models/CommandList";
import IProcessor from "../Interfaces/IProcessor";
import Logs, { ILogsModel } from "../Database/Models/Logs";
import { ICommandSignature } from "../Interfaces/ICommandSignature";

const EMPTY_COMMAND = {
    AllowedChannels: [],
    AllowedRoles   : [],
    AllowedUsers   : [],
    Data           : {}
};

export default class Processor implements IProcessor {
    static DELAY_TIMER = 300;

    public Commands: CommandList;
    public Context : Context;
    public DbInUse : boolean;
    public Loaded  : boolean;
    public Logging : number;
    public Prefix  : string;

    constructor(context: Context, prefix = '!', logging = 0) {
        this.Context  = context;
        this.Prefix   = prefix;
        this.Loaded   = false;
        this.Logging  = logging
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

    private formatCommandSignatures(signatures: ICommandSignature[]): string[] {
        const maxLength           = signatures.reduce((a, b) => b.Name.length > a.Name.length ? b : a).Name.length;
        const formattedSignatures = signatures.map(({Name, Signature}) => `${Name.padEnd(maxLength, ' ')} | ${Signature}`);

        formattedSignatures.unshift('-'.padEnd(30));
        formattedSignatures.unshift(`${'Command'.padEnd(maxLength, ' ')} | Signature`);
        formattedSignatures.unshift('```');
        formattedSignatures.push('```')

        return formattedSignatures;
    } 

    private GetCommandSignatures(message: Message): ICommandSignature[] {
        return Object.values(this.Commands)
            .filter((command) => command.Validate(message))
            .map((command) => ({
                Name:      command.Name(),
                Signature: command.Signature
            }));
    }

    public HelpCommand(message: Message) {
        const commands = this.GetCommandSignatures(message);
        
        if (commands.length > 0) {
            return message.channel.send(this.formatCommandSignatures(commands).join('\n'))
        }

        return message.channel.send('No Commands Found')
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

        this.DbInUse = useDB;
        this.Loaded  = true;

        return this.Commands;
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

            if (this.Context.Loading === true || this.Loaded === false) {
                console.log('[WARNING] Message Received before Data is loaded, delaying');
                setTimeout(() => this.Handle(message), Processor.DELAY_TIMER);

                return;
            }

            if (message.content.indexOf(this.Prefix) !== 0) {
                return Promise.resolve('');
            }

            const name = message.content.split(' ').shift().substr(1);
            const isValid = this.Commands[name.toLowerCase()];

            if (isValid) {
                logs.Command  = name.toLowerCase();

                result = await this.Commands[name.toLowerCase()].Call(message);
            } else if (name === 'help') {
                result = await this.HelpCommand(message)
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