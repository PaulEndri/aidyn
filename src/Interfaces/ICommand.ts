import {Message} from 'discord.js';
import IContext from './IContext';

export default interface ICommand {    
    AllowedChannels  : string[];
    AllowedRoles     : string[];
    AllowedUsers     : string[];
    AllowedGuilds    : string[];
    Data             : {};
    CooldownRate     : number;
    RequiresDatabase : boolean;
    Run              : (message: Message) => Promise<any>;
    Signature        : string;
    BotContext       : IContext;
}