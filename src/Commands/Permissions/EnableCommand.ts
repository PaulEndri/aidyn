import { Command } from "../..";
import { Message } from "discord.js";

class EnableCommand extends Command {
    static NAME      = 'enableCommand';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Arguments    = [
        { name: 'command' },
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner) {
            message.reply('This command is only available to owner');
        }

        const {
            command
        } = args;

        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];

        if (!modifyingCommand) {
            return message.reply(`Command ${command} not found`);
        }
        
        modifyingCommand.Disabled = false;

        return message.reply(`Command ${command} has been enabled`);
    }
}

export default EnableCommand;