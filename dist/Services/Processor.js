"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logs_1 = __importDefault(require("../Database/Models/Logs"));
class Processor {
    constructor(context, prefix = '!', owner, logging = 0) {
        this.Context = context;
        this.Prefix = prefix;
        this.Loaded = false;
        this.Logging = logging;
        this.Owner = owner;
    }
    async SaveLogs(log) {
        if (this.DbInUse === false) {
            return false;
        }
        if (this.Logging >= 2 || (this.Logging === 1 && log.Command)) {
            await log.save();
            return true;
        }
        return false;
    }
    async Handle(message) {
        const logs = new Logs_1.default();
        const start = new Date().getTime();
        logs.User = message.author.username;
        logs.Channel = message.channel.id;
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
                logs.Command = name.toLowerCase();
                const command = this.Context.LoadedCommands[name.toLowerCase()];
                const isOwner = message.author.id !== this.Context.Owner;
                if (command.Disabled && !isOwner) {
                    result = await message.channel.send('This command has been disabled, please contact the bot owner to enable it');
                }
                else {
                    result = await command.Call(message, isOwner);
                }
            }
            logs.Runtime = new Date().getTime() - start;
            logs.Success = true;
            await this.SaveLogs(logs);
            return result;
        }
        catch (e) {
            logs.Runtime = new Date().getTime() - start;
            logs.Success = false;
            logs.Response = e.message;
            await this.SaveLogs(logs);
            console.error('[Fatal Error]', e);
            return Promise.reject(e);
        }
    }
}
Processor.DELAY_TIMER = 300;
exports.default = Processor;
