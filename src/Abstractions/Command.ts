import ICommand from '../Interfaces/ICommand';
import { Message, Collection } from 'discord.js';
import Commands from '../Database/Models/Commands';
import IContext from '../Interfaces/IContext';
import ICommandArgument from '../Interfaces/ICommandArgument';

/**
 * @module Command
 * @preferred
 */

abstract class Command implements ICommand {
    public AllowedGuilds    : string[];
    public AllowedChannels  : string[];
    public AllowedRoles     : string[];
    public AllowedUsers     : string[];
    public Data             : any;
    public RequiresDatabase : boolean;
    public Blurb            : string;
    public BotContext       : IContext;
    public CooldownRate     : number;
    public LastRun          : number;
    public Arguments        : ICommandArgument[];
    public Parametrized     : boolean;
    public Disabled         : boolean;
    public Type             : string;
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

    abstract Run(message: Message, args?: any): Promise<any>;

    public Name(): string {
        return Object.getPrototypeOf(this).constructor.NAME;
    }

    public Namespace(): string {
        return Object.getPrototypeOf(this).constructor.NAMESPACE;
    }

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

    public ModifyPermissions(type: string, action: string, key: string, local = false) {
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

    public Call(message: Message, isOwner: boolean): Promise<any> {
        if (!isOwner) {
            if (this.AllowedGuilds && this.AllowedGuilds.length > 0 && !this.AllowedGuilds.includes(message.guild.id)) {
                console.warn('[Failed Guild Permission]', message.member.displayName, message.guild.id, message.content);
            }

            if (!this.ValidateRoles(message.member.roles) || !this.ValidateChannel(message.channel.id)) {
                console.warn('[Failed Permission]', message.member.displayName, message.channel.id, message.content);

                message.channel.send(`[Permission Failure] I'm afraid I can't let you do that, ${message.member.displayName}`);
    
                return Promise.resolve('');
            }

            const isOnCooldown = this.CheckCooldown();

            if (isOnCooldown) {
                message.channel.send('[Rate Warning] This command is still on cooldown, please wait.');
            }
        }

        return this
            .Run(message, this.GetArguments(message))
            .then(() => this.Save());
    }

    /**
     * Returns false if command is on cooldown
     */
    public CheckCooldown(): boolean {
        if (this.CooldownRate && this.CooldownRate !== 0) {
            const timestamp = new Date().getTime()

            if (!this.LastRun || (timestamp - this.LastRun >= this.CooldownRate)) {
                this.LastRun = timestamp;

                return false
            }

            return true
        }

        return false;
    }

    // @ts-ignore
    public ContextInjection(context?: any) {
        return {}
    }

    public GetArguments(message: Message): any {
        const args = this.Arguments;

        if (!args || args) {
            return null;
        }

        if (this.Parametrized === true) {
            return this.GetParameterizedArguments(message.content);
        } else {
            return this.GetGenericArguments(message.content)
        }
    }

    private GetParameterizedArguments(content: string) {
        const parts   = content.replace(/\u2014/g, '--').split('--').slice(1);
        const results = {};
        const values  = {};
        const args    = this.Arguments;

        parts.forEach((part) => {
            const words = part.split(' ');

            if (words[0].indexOf('=') >= 0) {
                const keys = words[0].split('=');

                if (words.length === 1) {
                    values[keys[0]] = keys[1];
                } else {
                    const key   = keys[0];
                    const value = [keys[1], ...words.slice(1)];

                    values[key] = value.join(' ');
                }
            } else {
                values[words[0]] = words.slice(1).join(' ')
            }
        });

        args.forEach((argument: ICommandArgument) => {
            if (values[argument.name]) {
                results[argument.name] = values[argument.name];
            }

            if (argument.alias && values[argument.alias]) {
                results[argument.name] = values[argument.alias]
            }
        })
    
        return results;
    }

    private GetGenericArguments(content: string) {
        const parts   = content.split(' ').slice(1);
        const args    = this.Arguments;
        const results = {args: []};


        args.forEach((argument: ICommandArgument, index: number) => {
            if (parts[index]) {
                results[argument.name] = parts[index]
            }
        })

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

    public async Save(force?: boolean): Promise<any> {
        if (this.RequiresDatabase === false) {
            return Promise.resolve();
        }

        let command = await Commands.findOne({Namespace: this.Namespace()});

        if (!command) {
            command = new Commands({
                Namespace:       this.Namespace(),
                AllowedChannels: [],
                AllowedRoles:    [],
                AllowedUsers:    [],
                AllowedGuilds:   [],
                Data:            {}
            })
        }

        if (this.Modified || force === true) {
            // Overall all data for this command
            command.Data[this.Name()] = {
                AllowedChannels : this.AllowedChannels,
                AllowedRoles    : this.AllowedRoles,
                AllowedUsers    : this.AllowedUsers,
                AllowedGuilds   : this.AllowedGuilds,
                Type            : this.Type,
                Data            : (this.Data[this.Name()] || {data: {}}).Data || {}
            };
        }

        // If namespace === name then this is the parent and should be synced as such
        if (this.Namespace() === this.Name()) {
            command.AllowedChannels = this.AllowedChannels;
            command.AllowedRoles    = this.AllowedRoles;
            command.AllowedUsers    = this.AllowedUsers;
            command.AllowedGuilds   = this.AllowedGuilds;
        }

        return command.save();
    }

    public Validate(message: Message): boolean {
        const validGuild = !this.AllowedChannels || this.AllowedGuilds.length === 0 || this.AllowedGuilds.includes(message.guild.id);
        return validGuild && this.ValidateRoles(message.member.roles) || this.ValidateUsers(message.member.id)
    }
}

export default Command;