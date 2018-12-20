"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class EnableCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Blurb = 'Command for bot owners and allowed users to enable commands';
        this.Arguments = [
            { name: 'command' },
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.channel.send('[Permission Failure] This command is only available to owner');
        }
        const { command } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.channel.send(`[Error] Command ${command} not found`);
        }
        modifyingCommand.Disabled = false;
        return message.channel.send(`[Success] Command ${command} has been enabled`);
    }
}
EnableCommand.NAME = 'enableCommand';
EnableCommand.NAMESPACE = 'admin';
exports.default = EnableCommand;
