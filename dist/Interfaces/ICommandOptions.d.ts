import ICommandArgument from './ICommandArgument';
export default interface ICommandOptions {
    AllowedChannels: string[];
    AllowedRoles: string[];
    AllowedUsers: string[];
    AllowedGuilds: string[];
    DatabaseRequired: Boolean;
    Args: ICommandArgument[];
}
//# sourceMappingURL=ICommandOptions.d.ts.map