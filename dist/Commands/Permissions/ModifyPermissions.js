"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class ModifyPermissions extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Arguments = [
            { name: 'command' },
            { name: 'type', type: 'role|user|channel' },
            { name: 'target' },
            { name: 'add' },
            { name: 'remove' }
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner) {
            message.reply('This command is only available to owner');
        }
        const { command, target, add, remove, type } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.reply(`Command ${command} not found`);
        }
        if (add && remove) {
            return message.reply('Please only specify add OR remove');
        }
        if (!'role|user|channel'.includes(type)) {
            return message.reply('Type must be one of role, user, or channel');
        }
        modifyingCommand.ModifyPermissions(type, add ? 'add' : 'remove', target.replace(/\D/g, ''));
        await modifyingCommand.Save();
        return message.reply('Permissions updated and saved');
    }
}
ModifyPermissions.NAME = 'modifyPermissions';
ModifyPermissions.NAMESPACE = 'admin';
exports.default = ModifyPermissions;
