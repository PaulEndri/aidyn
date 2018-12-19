import { Command } from "../..";
import { Message } from "discord.js";

class DisableCommand extends Command {
    static NAME      = 'disableCommand';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Arguments    = [
        { name: 'command', type:'string', text: 'Command type'},
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
        
        modifyingCommand.Disabled = true;

        return message.reply(`Command ${command} has been disabled`);
    }
}

export default DisableCommand;