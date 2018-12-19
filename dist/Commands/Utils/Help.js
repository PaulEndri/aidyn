"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class Help extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
    }
    // @ts-ignore 
    async Run(message, args) {
        // @ts-ignore
        const commands = this.BotContext.LoadedCommands
            .filter((cmd) => {
            const hasPermission = cmd.Validate(message);
            return cmd.Disabled !== true && hasPermission;
        })
            .map((command) => {
            let helpString = `${this.BotContext.Prefix}${command.Name()}`;
            if (command.Arguments && command.Arguments.length > 0) {
                command.Arguments.forEach((arg) => {
                    const prefix = this.Parametrized ? '--' : '';
                    helpString = helpString += ` ${prefix}${arg.name}=${arg.type || 'value'}`;
                });
            }
            return helpString;
        });
        if (commands.length <= 0) {
            return message.reply('No commands found');
        }
        const msg = commands.join('\n');
        if (msg.length < 1900) {
            return message.reply(`\`\`\`\n${msg}\`\`\``);
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
            return Promise.all(messages.map((msg) => message.reply(`\`\`\`\n${msg}\`\`\``)));
        }
    }
}
Help.NAME = 'help';
Help.NAMESPACE = 'util';
exports.default = Help;
//# sourceMappingURL=Help.js.map