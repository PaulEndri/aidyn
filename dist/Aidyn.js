"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Context_1 = __importDefault(require("./Services/Context"));
const Processor_1 = __importDefault(require("./Services/Processor"));
const dotenv_1 = __importDefault(require("dotenv"));
// load environment
dotenv_1.default.config();
class Aidyn {
    constructor(config) {
        const { BotToken, ConnectionString, Prefix, Logging, CustomProcessor, Owner } = config;
        this.Client = new discord_js_1.Client();
        this.Loaded = false;
        this.Context = new Context_1.default(this.Client, Owner);
        this.BotToken = BotToken;
        this.Processor = CustomProcessor || new Processor_1.default(this.Context, Prefix, Owner, Logging);
        ;
        this.ConnectionString = ConnectionString;
        this.Context.Prefix = Prefix;
    }
    async LoadCommands(commands) {
        if (this.Context.Loading !== false) {
            await this.Context.Initialize(this.ConnectionString);
        }
        const results = await this.Context.LoadCommands(commands);
        this.Loaded = true;
        return results;
    }
    async Start(commands) {
        if (this.Loaded === false && !commands) {
            throw new Error("[FAILURE] No Commands Loaded!");
        }
        else if (this.Loaded === false && commands) {
            await this.LoadCommands(commands);
        }
        const { Client, Processor, BotToken } = this;
        Client.on('message', (m) => Processor.Handle(m));
        await Client
            .login(BotToken || process.env.BOT_TOKEN)
            .then((token) => {
            console.log('[SUCCESS] Bot Online');
            return token;
        });
        return this;
    }
    async Stop() {
        return this.Client.destroy();
    }
}
exports.default = Aidyn;
//# sourceMappingURL=Aidyn.js.map