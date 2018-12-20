"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class ModifyPermissions extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Lockdown = true;
        this.Blurb = 'Command for bot owners and allowed users to modify users/roles/channels for a given command';
        this.Arguments = [
            { name: 'command' },
            { name: 'type', type: 'role|user|channel' },
            { name: 'target' },
            { name: 'add' },
            { name: 'remove' }
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.channel.send('[Permission Failure] This command is only available to owner');
        }
        const { command, target, add, remove, type } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.channel.send(`[Error] Command ${command} not found`);
        }
        if (add && remove) {
            return message.channel.send('[Missing Parameter] Please only specify add OR remove');
        }
        if (!'role|user|channel'.includes(type)) {
            return message.channel.send('[Error] Type must be one of role, user, or channel');
        }
        modifyingCommand.ModifyPermissions(type, add ? 'add' : 'remove', target.replace(/\D/g, ''));
        await modifyingCommand.Save();
        return message.channel.send('[Success] Permissions updated and saved');
    }
}
ModifyPermissions.NAME = 'modifyPermissions';
ModifyPermissions.NAMESPACE = 'admin';
exports.default = ModifyPermissions;
