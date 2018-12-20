import { Command } from "../..";
import { Message } from "discord.js";

class EnableCommand extends Command {
    static NAME      = 'enableCommand';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Lockdown     = true;
    public Blurb        = 'Command for bot owners and allowed users to enable commands';
    public Arguments    = [
        { name: 'command' },
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.channel.send('[Permission Failure] This command is only available to owner');
        }

        const {
            command
        } = args;

        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];

        if (!modifyingCommand) {
            return message.channel.send(`[Error] Command ${command} not found`);
        }
        
        modifyingCommand.Disabled = false;

        return message.channel.send(`[Success] Command ${command} has been enabled`);
    }
}

export default EnableCommand;