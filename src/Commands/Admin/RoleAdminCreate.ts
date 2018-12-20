import { Command } from "../..";
import { Message } from "discord.js";
import RoleAdmin, { GenerateRoleAdmin } from "../../Abstractions/Commands/RoleAdmin";

class RoleAdminCreate extends Command {
    static NAME      = 'roleAdminCreate';
    static NAMESPACE = 'admin';

    public Parametrized = true;
    public Lockdown     = true;
    public Blurb        = 'Command for bot owners and allowed users to create dynamic role admin commands';
    public Arguments    = [
        { name: 'name', type:'string', text: 'Command name'},
        { name: 'lead', type:'@role', text: 'Role that is to be given authority'},
        { name: 'role', type:'@role', text: 'Role that is to underneath the lead'}
    ];

    public async Run(message: Message, args: any) {
        if (message.author.id !== this.BotContext.Owner && (!this.AllowedRoles || this.AllowedRoles.length === 0)) {
            return message.reply('[Permission Failure] This command is only available to bot owner');
        }

        if (this.BotContext.UseDb === false) {
           return message.reply('[Error] This command can only be used if a DB has been configured'); 
        }

        const {
            name,
            lead,
            role
        } = args;

        if (!name || !lead || !role) {
            return message.reply('[Missing Parameters] Name, Lead, and Role must all be specified');
        }

        if (this.BotContext.LoadedCommands[name] !== undefined) {
            return message.reply(`[Error] Command {$name} already exists`);
        }

        const command                  = GenerateRoleAdmin(name, lead, role, message.guild.id);
        const loadedCommand: RoleAdmin = new command([], [], [], true);

        this.BotContext.LoadedCommands[name] = loadedCommand;

        await loadedCommand.Save(true);

        return message.reply(`[Success] Command ${this.BotContext.Prefix}${name} has been created`);
    }
}

export default RoleAdminCreate;