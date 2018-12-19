import Command from '../Command';
import { Message } from 'discord.js';

abstract class RoleAdmin extends Command {
    static NAME      = 'RoleAdmin';
    static NAMESPACE = 'RoleAdmin'
    static ROLE      = '';
    static ROLES     = [''];

    public Parametrized = true;
    public Arguments    = [
        { name: 'add', type: 'boolean', text: 'Is a user being added to the role?' },
        { name: 'remove', type: 'boolean', text: 'Is a user being removed from the role?'},
        { name: 'user', type: '@user', text: 'User being modified' }
    ]

    public constructor(channels: string[], roles: string[], users: string[], dbRequired = false) {
        super(channels, roles, users, dbRequired);

        const _roles = Object.getPrototypeOf(this).constructor.ROLES;

        if (_roles && _roles.length > 0) {
            this.AllowedRoles = _roles;
        }
    }

    private async AddDiscordRole(message: Message, id): Promise<any> {
        const guild  = message.guild;
        const member = guild.members.find((member) => member.id === id);
        const role   =  Object.getPrototypeOf(this).constructor.ROLE;

        if (!member.roles.has(role)) {
            member.addRole(role, `Added by ${message.author.username}`);
        }
    }

    private async RemoveDiscordRole(message: Message, id: string): Promise<any> {
        const guild  = message.guild;
        const member = guild.members.find((member) => member.id === id);
        const role   =  Object.getPrototypeOf(this).constructor.ROLE;

        if (member.roles.has(role)) {
            return member.removeRole(role,  `Removed by ${message.author.username}`);
        }
    }

    public async Run(message: Message, args: any): Promise<any> {
        const {add, remove, user} = args

        if (add && !remove) {
            await this.AddDiscordRole(message, user);
        } else if (remove && !add) {
            await this.RemoveDiscordRole(message, user);
        } else {
            return await message.channel.send('Please specify --add OR --remove');
        }

       return message.channel.send('Records Updated');
    }
}

export default RoleAdmin;