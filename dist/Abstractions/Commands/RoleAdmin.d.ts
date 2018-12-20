import Command from '../Command';
import { Message } from 'discord.js';
declare abstract class RoleAdmin extends Command {
    static NAME: string;
    static NAMESPACE: string;
    static ROLE: string;
    static ROLES: string[];
    Parametrized: boolean;
    Arguments: {
        name: string;
        type: string;
        text: string;
    }[];
    constructor(channels: string[], roles: string[], users: string[], dbRequired?: boolean);
    private AddDiscordRole;
    private RemoveDiscordRole;
    Run(message: Message, args: any): Promise<any>;
}
export default RoleAdmin;
export declare const GenerateRoleAdmin: (name: any, leadRole: any, roleToAdd: any, guildId: any) => any;
