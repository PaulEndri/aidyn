import ICommand from '../Interfaces/ICommand';
import { Message, Collection } from 'discord.js';
import IContext from '../Interfaces/IContext';
import ICommandArgument from '../Interfaces/ICommandArgument';
/**
 * @module Command
 * @preferred
 */
declare abstract class Command implements ICommand {
    AllowedGuilds: string[];
    AllowedChannels: string[];
    AllowedRoles: string[];
    AllowedUsers: string[];
    Data: any;
    RequiresDatabase: boolean;
    Blurb: string;
    BotContext: IContext;
    CooldownRate: number;
    LastRun: number;
    Arguments: ICommandArgument[];
    Parametrized: boolean;
    Disabled: boolean;
    Type: string;
    Lockdown: boolean;
    private Modified;
    constructor(channels: string[], roles: string[], users: string[], dbRequired?: boolean);
    LocalData: any;
    readonly HasLocalData: boolean;
    abstract Run(message: Message, args?: any): Promise<any>;
    Name(): string;
    Namespace(): string;
    private HasLocalField;
    protected ValidateChannel(channelId: string): boolean;
    protected ValidateRoles(roles: Collection<any, any>): boolean;
    protected ValidateUsers(user: string): boolean;
    private GetValidationPermission;
    ModifyPermissions(type: string, action: string, key: string, local?: boolean): void;
    AddAllowedChannel(channelId: string, local?: boolean): void;
    AddAllowedRole(roleId: string, local?: boolean): void;
    AddAllowedUser(user: string, local?: boolean): void;
    Call(message: Message, isOwner: boolean): Promise<any>;
    /**
     * Returns false if command is on cooldown
     */
    CheckCooldown(): boolean;
    ContextInjection(context?: any): {};
    GetArguments(message: Message): any;
    private GetParameterizedArguments;
    private GetGenericArguments;
    RemoveAllowedChannel(channelId: string, local?: boolean): void;
    RemoveAllowedRole(roleId: string, local?: boolean): void;
    RemoveAllowedUsers(user: string, local?: boolean): void;
    Save(force?: boolean): Promise<any>;
    Validate(message: Message): boolean;
}
export default Command;
//# sourceMappingURL=Command.d.ts.map