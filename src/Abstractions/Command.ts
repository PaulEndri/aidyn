import ICommand from '../Interfaces/ICommand';
import { Message, Collection } from 'discord.js';
import Commands from '../Database/Models/Commands';

/**
 * @module Command
 * @preferred
 */

abstract class Command implements ICommand {
    public AllowedChannels  : string[];
    public AllowedRoles     : string[];
    public AllowedUsers     : string[];
    public Data             : any;
    public RequiresDatabase : boolean;
    public Signature        : string;
    private Modified        : boolean;

    public constructor(channels: string[], roles: string[], users: string[], dbRequired = false) {
        this.AllowedChannels  = channels;
        this.AllowedRoles     = roles;
        this.AllowedUsers     = users;
        this.RequiresDatabase = dbRequired;

        this.Modified = false;
    }

    public get LocalData() {
        return this.Data[this.Name()];
    }

    public set LocalData(value: any) {
        this.Data[this.Name()] = value;
    }

    public get HasLocalData(): boolean {
        return !!this.Data[this.Name()];
    }

    abstract Run(message: Message): Promise<any>;
    abstract Name(): string;
    abstract Namespace(): string;

    private HasLocalField(name: string): boolean {
        return this.HasLocalData && !!this.LocalData[name];
    }

    protected ValidateChannel(channelId: string): boolean {
        const AllowedChannels = this.GetValidationPermission('Channel')

        return AllowedChannels.length === 0 || AllowedChannels.includes(channelId);
    }

    protected ValidateRoles(roles: Collection<any, any>): boolean {
        const AllowedRoles = this.GetValidationPermission('Role')

        return AllowedRoles.length === 0 || roles.find((role) => AllowedRoles.includes(role.id));
    }

    protected ValidateUsers(user: string): boolean {
        const AllowedUsers = this.GetValidationPermission('User')

        return AllowedUsers.length === 0 || AllowedUsers.includes(user);
    }

    private GetValidationPermission(type: string): any {
        const key = `Allowed${type}s`;

        if (this.HasLocalData) {
            return [...this[key], ...(this.LocalData[key] || [])];
        } else {
            return this[key];
        }
    }

    private ModifyPermissions(type: string, action: string, key: string, local = false) {
        const permissionKey = `Allowed${type}s`;

        if (!local) {
            if (action === 'add') {
                this[permissionKey].push(key);
            } else {
                this[permissionKey] = this[permissionKey].filter(entry => key === entry);
            }
        } else if(this.HasLocalField(permissionKey)) {
            if (action === 'add') {
                this.LocalData[permissionKey].push(key);
            } else {
                this.LocalData[permissionKey] = this.LocalData[permissionKey].filter(entry => key === entry);
            }
        } else {
            this.LocalData[permissionKey] = [key];
        }

        this.Modified = true;
    }

    public AddAllowedChannel(channelId: string, local = true): void {
        return this.ModifyPermissions('Channel', 'add', channelId, local);
    }

    public AddAllowedRole(roleId: string, local = true): void {
        return this.ModifyPermissions('Role', 'add', roleId, local);
    }

    public AddAllowedUser(user: string, local = true): void {
        return this.ModifyPermissions('User', 'add', user, local);
    }

    public Call(message: Message): Promise<any> {
    
        if (!this.ValidateRoles(message.member.roles) || !this.ValidateChannel(message.channel.id)) {
            console.warn('[Failed Permission]', message.member.displayName, message.channel.id, message.content);

            return Promise.resolve('');
        }

        return this
            .Run(message)
            .then(() => this.Save());
    }

    private GetParameterizedContext(content: string) {
        const parts   = content.split('--');
        const results = { args: []};

        parts.forEach((part) => {
            const words = part.split(' ');

            if (words[0].indexOf('=') >= 0) {
                const keys = words[0].split('-');

                if (words.length === 1) {
                    results[keys[0]] = keys[1];
                } else {
                    const key   = keys[0];
                    const value = [keys[1], ...words.slice(1)];

                    results[key] = value;
                }
            } else {
                results[words[0]] = words.slice(1).join(' ')
            }
        });

        return results;
    }

    private GetGenericContext(content: string) {
        const parts   = content.split(' ');
        const results = {args: []};

        parts.forEach((part: string) => {
            if (part.indexOf('--') === 0) {
                const param = part.split('=');

                results[param[0].replace('--', '')] = param[1] || true;
            } else {
                results.args.push(part);
            }
        });

        return results;

    }
    public GetContext(message: Message, parameterized = false): any {
        let results: any;

        if (parameterized === true) {
            results = this.GetParameterizedContext(message.content);
        } else {
            results = this.GetGenericContext(message.content);
        }

        if (results.args.length < 2) {
            results.args.push('');
            results.args.push('');
        }

        return results;
    }

    public RemoveAllowedChannel(channelId: string, local = true): void {
        return this.ModifyPermissions('Channel', 'remove', channelId, local);
    }

    public RemoveAllowedRole(roleId: string, local = true): void {
        return this.ModifyPermissions('Role', 'remove', roleId, local);
    }

    public RemoveAllowedUsers(user: string, local = true): void {
        return this.ModifyPermissions('User', 'remove', user, local);
    }

    public async Save(): Promise<any> {
        if (this.RequiresDatabase === false) {
            return Promise.resolve();
        }

        let command = await Commands.findOne({Namespace: this.Namespace()});

        if (!command) {
            command = new Commands({
                Namespace:       this.Namespace(),
                AllowedChannels: this.AllowedChannels,
                AllowedRoles:    this.AllowedRoles,
                AllowedUsers:    this.AllowedUsers,
                Data:            {}
            })
        }
        command.Data = {
            ...(command.Data || {}),
            ...this.Data,
        };

        if (this.Modified) {
            if (!command.Data[this.Name()]) {
                command.Data[this.Name()] = {};
            }

            command.Data[this.Name()] = {
                AllowedChannels : this.AllowedChannels,
                AllowedRoles    : this.AllowedRoles,
                AllowedUsers    : this.AllowedUsers
            };
        }

        return command.save();
    }

    public Validate(message: Message): boolean {
        return this.ValidateRoles(message.member.roles) || this.ValidateUsers(message.member.id)
    }
}

export default Command;