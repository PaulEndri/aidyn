import { Client } from 'discord.js';
import Context from './Services/Context';
import Processor from './Services/Processor';
import dotenv from 'dotenv';
import IConfig from './Interfaces/IConfig';

// load environment
dotenv.config()

export default class Aidyn {
    private Client:           Client;
    private ConnectionString: string;
    private BotToken:         string;
    private Processor:        Processor;
    private Loaded:           boolean;
    public Context:           Context;

    constructor(config?: IConfig) {
        const {BotToken, ConnectionString, Prefix, Logging, CustomProcessor} = config

        this.Client           = new Client();
        this.Loaded           = false;
        this.Context          = new Context(this.Client);
        this.BotToken         = BotToken;
        this.Processor        = CustomProcessor || new Processor(this.Context, Prefix, Logging);;
        this.ConnectionString = ConnectionString;
    }

    public async LoadCommands(commands: any): Promise<any> {
        const useDB   = await this.Context.Initialize(this.ConnectionString);
        const results = await this.Processor.LoadCommands(commands, useDB);

        this.Loaded = true;

        return results;
    }

    public async Start(commands?: any): Promise<any> {
        if (this.Loaded === false && !commands) {
            throw new Error("No Commands Loaded!");
        } else if(this.Loaded === false && commands) {
            await this.LoadCommands(commands);
        }

        const {Client, Processor, BotToken} = this;

        Client.on('message', Processor.Handle);

        return Client
            .login(BotToken || process.env.BOT_TOKEN)
            .then((token) => {
                console.log('[SUCCESS] Bot Online');
                
                return token;
            });
    }

    public async Stop(): Promise<any> {
        return this.Client.destroy();
    }
}