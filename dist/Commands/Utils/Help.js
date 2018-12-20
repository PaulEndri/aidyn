"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class Help extends __1.Command {
    constructor() {
        super(...arguments);
        this.Arguments = [
            { name: 'command' }
        ];
    }
    RunForCommand(key) {
        const command = this.BotContext.LoadedCommands[key];
        if (!command) {
            return `[Error] Command ${key} not found`;
        }
        const args = command.Arguments.map((arg) => {
            const { name, text, type } = arg;
            let response = `\t${name}:\n\t\tType: ${type || 'string'}`;
            if (text) {
                response += `\n\t\tInfo: ${text}`;
            }
            return response;
        });
        return `\nHelp for command: ${key}\n\t${command.Blurb}\n\n${args.join('\n')}`;
    }
    // @ts-ignore 
    async Run(message, args) {
        if (args && args.command) {
            return message.reply(this.RunForCommand(args.command));
        }
        const commands = Object.values(this.BotContext.LoadedCommands)
            .filter((cmd) => {
            const hasPermission = cmd.Validate(message);
            return cmd.Disabled !== true && hasPermission && cmd.Name() !== 'help';
        })
            .map((command) => {
            let helpString = `\n${this.BotContext.Prefix}${command.Name().toLowerCase()}`;
            if (command.Arguments && command.Arguments.length > 0) {
                command.Arguments.forEach((arg) => {
                    const prefix = command.Parametrized ? '--' : '';
                    helpString = helpString += `\n\t${prefix}${arg.name}=${arg.type || 'value'}`;
                });
            }
            return helpString;
        });
        if (commands.length <= 0) {
            return message.reply('No commands found');
        }
        const msg = commands.join('\n');
        if (msg.length < 1900) {
            return message.reply(`Type ${this.BotContext.Prefix}help (command) for details about a specific command\n\`\`\`\n${msg}\`\`\``);
        }
        else {
            let activeIndex = 0;
            const messages = [''];
            while (commands.length > 0) {
                const currentCommand = commands.shift();
                if (messages[activeIndex].length + currentCommand.length < 1900) {
                    messages[activeIndex] = `${messages[activeIndex]}\n${currentCommand}`;
                }
                else {
                    activeIndex = activeIndex + 1;
                    messages[activeIndex] = `\n${currentCommand}`;
                }
            }
            message.channel.send(`Type ${this.BotContext.Prefix}help (command) for details about a specific command`);
            return Promise.all(messages.map((msg) => message.channel.send(`\`\`\`\n${msg}\`\`\``)));
        }
    }
}
Help.NAME = 'help';
Help.NAMESPACE = 'util';
exports.default = Help;
