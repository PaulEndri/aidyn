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
        const {BotToken, ConnectionString, Prefix, Logging, CustomProcessor, Owner} = config

        this.Client           = new Client();
        this.Loaded           = false;
        this.Context          = new Context(this.Client, Owner);
        this.BotToken         = BotToken;
        this.Processor        = CustomProcessor || new Processor(this.Context, Prefix, Owner, Logging);;
        this.ConnectionString = ConnectionString;
        this.Context.Prefix   = Prefix;
    }

    public async LoadCommands(commands: any): Promise<any> {
        if (this.Context.Loading !== false) {
            await this.Context.Initialize(this.ConnectionString);
        }

        const results = await this.Context.LoadCommands(commands);

        this.Loaded = true;

        return results;
    }

    public async Start(commands?: any): Promise<Aidyn> {
        if (this.Loaded === false && !commands) {
            throw new Error("[FAILURE] No Commands Loaded!");
        } else if(this.Loaded === false && commands) {
            await this.LoadCommands(commands);
        }

        const {Client, Processor, BotToken} = this;

        Client.on('message', (m) => Processor.Handle(m));

        await Client
            .login(BotToken || process.env.BOT_TOKEN)
            .then((token) => {
                console.log('[SUCCESS] Bot Online');
                
                return token;
            });

        return this;
    }

    public async Stop(): Promise<any> {
        return this.Client.destroy();
    }
}