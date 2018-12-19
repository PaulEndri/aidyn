"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class DisableCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Arguments = [
            { name: 'command', type: 'string', text: 'Command type' },
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
        modifyingCommand.Disabled = true;
        return message.reply(`Command ${command} has been disabled`);
    }
}
DisableCommand.NAME = 'disableCommand';
DisableCommand.NAMESPACE = 'admin';
exports.default = DisableCommand;
//# sourceMappingURL=DisableCommand.js.map