"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class EnableCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Arguments = [
            { name: 'command' },
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner) {
            message.reply('This command is only available to owner');
        }
        const { command } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.reply(`Command ${command} not found`);
        }
        modifyingCommand.Disabled = false;
        return message.reply(`Command ${command} has been enabled`);
    }
}
EnableCommand.NAME = 'enableCommand';
EnableCommand.NAMESPACE = 'admin';
exports.default = EnableCommand;
//# sourceMappingURL=EnableCommand.js.map