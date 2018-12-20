import { Command } from "../..";
import { Message } from "discord.js";

class ModifyPermissions extends Command {
    static NAME      = 'modifyPermissions';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Blurb        = 'Command for bot owners and allowed users to modify users/roles/channels for a given command';
    public Arguments    = [
        { name: 'command' },
        { name: 'type', type: 'role|user|channel'},
        { name: 'target' },
        { name: 'add' },
        { name: 'remove' }
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            message.channel.send('[Permission Failure] This command is only available to owner');
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
            return message.channel.send(`[Error] Command ${command} not found`);
        }

        if (add && remove) {
            return message.channel.send('[Missing Parameter] Please only specify add OR remove');
        }

        if (!'role|user|channel'.includes(type)) {
            return message.channel.send('[Error] Type must be one of role, user, or channel');
        }

        modifyingCommand.ModifyPermissions(type, add ? 'add' : 'remove', target.replace(/\D/g, ''))

        await modifyingCommand.Save();

        return message.channel.send('[Success] Permissions updated and saved');
    }
}

export default ModifyPermissions;