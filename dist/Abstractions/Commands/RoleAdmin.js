"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../Command"));
class RoleAdmin extends Command_1.default {
    constructor(channels, roles, users, dbRequired = false) {
        super(channels, roles, users, dbRequired);
        this.Parametrized = true;
        this.Arguments = [
            { name: 'add', type: 'boolean', text: 'Is a user being added to the role?' },
            { name: 'remove', type: 'boolean', text: 'Is a user being removed from the role?' },
            { name: 'user', type: '@user', text: 'User being modified' }
        ];
        const _roles = Object.getPrototypeOf(this).constructor.ROLES;
        if (_roles && _roles.length > 0) {
            this.AllowedRoles = _roles;
        }
    }
    async AddDiscordRole(message, id) {
        const guild = message.guild;
        const member = guild.members.find((member) => member.id === id);
        const role = Object.getPrototypeOf(this).constructor.ROLE;
        if (!member.roles.has(role)) {
            member.addRole(role, `Added by ${message.author.username}`);
        }
    }
    async RemoveDiscordRole(message, id) {
        const guild = message.guild;
        const member = guild.members.find((member) => member.id === id);
        const role = Object.getPrototypeOf(this).constructor.ROLE;
        if (member.roles.has(role)) {
            return member.removeRole(role, `Removed by ${message.author.username}`);
        }
    }
    async Run(message, args) {
        const { add, remove, user } = args;
        if (add && !remove) {
            await this.AddDiscordRole(message, user);
        }
        else if (remove && !add) {
            await this.RemoveDiscordRole(message, user);
        }
        else {
            return await message.channel.send('Please specify --add OR --remove');
        }
        return message.channel.send('Records Updated');
    }
}
RoleAdmin.NAME = 'RoleAdmin';
RoleAdmin.NAMESPACE = 'RoleAdmin';
RoleAdmin.ROLE = '';
RoleAdmin.ROLES = [''];
exports.default = RoleAdmin;
//# sourceMappingURL=RoleAdmin.js.map