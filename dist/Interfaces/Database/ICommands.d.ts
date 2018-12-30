export interface IDatafield {
    AllowedUsers?: string[];
    AllowedRoles?: string[];
    AllowedChannels?: string[];
    AllowedGuilds?: string[];
    Type?: string;
    Data?: any;
}
export interface IData {
    [index: string]: IDatafield;
}
export default interface ICommands {
    AllowedUsers?: string[];
    AllowedRoles?: string[];
    AllowedChannels?: string[];
    AllowedGuilds?: string[];
    Data?: IData;
    Namespace?: string;
}
//# sourceMappingURL=ICommands.d.ts.map