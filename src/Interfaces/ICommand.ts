import {Message} from 'discord.js';
import IContext from './IContext';
import ICommandArgument from './ICommandArgument';

export default interface ICommand {    
    AllowedChannels  : string[];
    AllowedRoles     : string[];
    AllowedUsers     : string[];
    AllowedGuilds    : string[];
    Data             : {};
    CooldownRate     : number;
    RequiresDatabase : boolean;
    Run              : (message: Message, args?: any) => Promise<any>;
    Blurb            : string;
    BotContext       : IContext;
    Parametrized     : boolean;
    Type             : string;
    LastRun          : number;
    Disabled         : boolean;
    Arguments        : ICommandArgument[];
    Lockdown         : boolean;
}