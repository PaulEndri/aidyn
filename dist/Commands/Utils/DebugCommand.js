"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class DebugCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Lockdown = true;
        this.Blurb = 'Owner only plz';
        this.Arguments = [
            { name: 'command' },
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner) {
            message.channel.send('[Permission Failure] This command is only available to owner');
        }
        const { command } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        message.channel.send(`***DATA***\`\`\`\n${modifyingCommand.Data}\`\`\``);
        message.channel.send(`***CHANNELS***\`\`\`\n${modifyingCommand.AllowedChannels}\`\`\``);
        message.channel.send(`***ROLES***\`\`\`\n${modifyingCommand.AllowedRoles}\`\`\``);
        message.channel.send(`***USERS***\`\`\`\n${modifyingCommand.AllowedUsers}\`\`\``);
        message.channel.send(`***GUILDS***\`\`\`\n${modifyingCommand.AllowedGuilds}\`\`\``);
        return message.reply('GL HF');
    }
}
DebugCommand.NAME = 'DebugCommand';
DebugCommand.NAMESPACE = 'util';
exports.default = DebugCommand;
