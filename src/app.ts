import { Client } from 'discord.js';
import Context from './Services/Context';
import Processor from './Services/Processor';
import dotenv from 'dotenv';

// load environment
dotenv.config()

export default class Aidyn {
    private ConnectionString: string;
    private BotToken:         string;
    private Client:           Client;
    private Processor:        Processor;
    private Loaded:           boolean;
    public Context:           Context;

    constructor(dbString?: string, botToken?: string, prefix: string = '%') {
        this.Client           = new Client();
        this.Loaded           = false;
        this.Context          = new Context(this.Client);
        this.BotToken         = botToken;
        this.Processor        = new Processor(this.Context, prefix);
        this.ConnectionString = dbString;

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

        Client.on('message', Processor.Handle)

        Client
            .login(BotToken || process.env.BOT_TOKEN)
            .then(() => {
                console.log('[SUCCESS] Bot Online')
            });
    }
}