import { Command } from "../..";
import { Message } from "discord.js";

class ModifyPermissions extends Command {
    static NAME      = 'modifyPermissions';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Arguments    = [
        { name: 'command' },
        { name: 'type', type: 'role|user|channel'},
        { name: 'target' },
        { name: 'add' },
        { name: 'remove' }
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner) {
            message.reply('This command is only available to owner');
        }

        const {
            command,
            target,
            add,
            remove,
            type
        } = args;

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

        modifyingCommand.ModifyPermissions(type, add ? 'add' : 'remove', target.replace(/\D/g, ''))

        await modifyingCommand.Save();

        return message.reply('Permissions updated and saved');
    }
}

export default ModifyPermissions;