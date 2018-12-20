import { Command } from "../..";
import { Message } from "discord.js";

class DisableCommand extends Command {
    static NAME      = 'disableCommand';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Blurb        = 'Command for bot owners and allowed users to disable commands';
    public Arguments    = [
        { name: 'command', type:'string', text: 'Command type'},
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.reply('[PermissionFailure] This command is only available to bot owner');
        }

        const {
            command
        } = args;

        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];

        if (!modifyingCommand) {
            return message.reply(`[Disable] Command ${command} not found`);
        }
        
        modifyingCommand.Disabled = true;

        return message.reply(`[Success] Command ${command} has been disabled`);
    }
}

export default DisableCommand;