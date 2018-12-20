"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class DisableCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Lockdown = true;
        this.Blurb = 'Command for bot owners and allowed users to disable commands';
        this.Arguments = [
            { name: 'command', type: 'string', text: 'Command type' },
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.channel.send('[PermissionFailure] This command is only available to bot owner');
        }
        const { command } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.channel.send(`[Disable] Command ${command} not found`);
        }
        modifyingCommand.Disabled = true;
        return message.channel.send(`[Success] Command ${command} has been disabled`);
    }
}
DisableCommand.NAME = 'disableCommand';
DisableCommand.NAMESPACE = 'admin';
exports.default = DisableCommand;
