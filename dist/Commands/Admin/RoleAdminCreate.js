"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const RoleAdmin_1 = require("../../Abstractions/Commands/RoleAdmin");
class RoleAdminCreate extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Lockdown = true;
        this.Blurb = 'Command for bot owners and allowed users to create dynamic role admin commands';
        this.Arguments = [
            { name: 'name', type: 'string', text: 'Command name' },
            { name: 'lead', type: '@role', text: 'Role that is to be given authority' },
            { name: 'role', type: '@role', text: 'Role that is to underneath the lead' }
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            return message.reply('[Permission Failure] This command is only available to bot owner');
        }
        if (this.BotContext.UseDb === false) {
            return message.reply('[Error] This command can only be used if a DB has been configured');
        }
        const { name, lead, role } = args;
        if (!name || !lead || !role) {
            return message.reply('[Missing Parameters] Name, Lead, and Role must all be specified');
        }
        if (this.BotContext.LoadedCommands[name] !== undefined) {
            return message.reply(`[Error] Command {$name} already exists`);
        }
        const command = RoleAdmin_1.GenerateRoleAdmin(name, lead, role, message.guild.id);
        const loadedCommand = new command([], [], [], true);
        this.BotContext.LoadedCommands[name] = loadedCommand;
        await loadedCommand.Save(true);
        return message.reply(`[Success] Command ${this.BotContext.Prefix}${name} has been created`);
    }
}
RoleAdminCreate.NAME = 'roleAdminCreate';
RoleAdminCreate.NAMESPACE = 'admin';
exports.default = RoleAdminCreate;
