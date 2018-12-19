"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Commands_1 = __importDefault(require("../Database/Models/Commands"));
/**
 * @module Command
 * @preferred
 */
class Command {
    constructor(channels, roles, users, dbRequired = false) {
        this.AllowedChannels = channels;
        this.AllowedRoles = roles;
        this.AllowedUsers = users;
        this.RequiresDatabase = dbRequired;
        this.Modified = false;
    }
    get LocalData() {
        return this.Data[this.Name()];
    }
    set LocalData(value) {
        this.Data[this.Name()] = value;
    }
    get HasLocalData() {
        return !!this.Data[this.Name()];
    }
    Name() {
        return Object.getPrototypeOf(this).constructor.NAME;
    }
    Namespace() {
        return Object.getPrototypeOf(this).constructor.NAMESPACE;
    }
    HasLocalField(name) {
        return this.HasLocalData && !!this.LocalData[name];
    }
    ValidateChannel(channelId) {
        const AllowedChannels = this.GetValidationPermission('Channel');
        return AllowedChannels.length === 0 || AllowedChannels.includes(channelId);
    }
    ValidateRoles(roles) {
        const AllowedRoles = this.GetValidationPermission('Role');
        return AllowedRoles.length === 0 || roles.find((role) => AllowedRoles.includes(role.id));
    }
    ValidateUsers(user) {
        const AllowedUsers = this.GetValidationPermission('User');
        return AllowedUsers.length === 0 || AllowedUsers.includes(user);
    }
    GetValidationPermission(type) {
        const key = `Allowed${type}s`;
        if (this.HasLocalData) {
            return [...this[key], ...(this.LocalData[key] || [])];
        }
        else {
            return this[key];
        }
    }
    ModifyPermissions(type, action, key, local = false) {
        const permissionKey = `Allowed${type}s`;
        if (!local) {
            if (action === 'add') {
                this[permissionKey].push(key);
            }
            else {
                this[permissionKey] = this[permissionKey].filter(entry => key === entry);
            }
        }
        else if (this.HasLocalField(permissionKey)) {
            if (action === 'add') {
                this.LocalData[permissionKey].push(key);
            }
            else {
                this.LocalData[permissionKey] = this.LocalData[permissionKey].filter(entry => key === entry);
            }
        }
        else {
            this.LocalData[permissionKey] = [key];
        }
        this.Modified = true;
    }
    AddAllowedChannel(channelId, local = true) {
        return this.ModifyPermissions('Channel', 'add', channelId, local);
    }
    AddAllowedRole(roleId, local = true) {
        return this.ModifyPermissions('Role', 'add', roleId, local);
    }
    AddAllowedUser(user, local = true) {
        return this.ModifyPermissions('User', 'add', user, local);
    }
    Call(message, isOwner) {
        if (!isOwner) {
            if (this.AllowedGuilds && this.AllowedGuilds.length > 0 && !this.AllowedGuilds.includes(message.guild.id)) {
                console.warn('[Failed Guild Permission]', message.member.displayName, message.guild.id, message.content);
            }
            if (!this.ValidateRoles(message.member.roles) || !this.ValidateChannel(message.channel.id)) {
                console.warn('[Failed Permission]', message.member.displayName, message.channel.id, message.content);
                message.channel.send(`I'm afraid I can't let you do that, ${message.member.displayName}`);
                return Promise.resolve('');
            }
            const isOnCooldown = this.CheckCooldown();
            if (isOnCooldown) {
                message.channel.send('This command is still on cooldown, please wait.');
            }
        }
        return this
            .Run(message, this.GetArguments(message))
            .then(() => this.Save());
    }
    /**
     * Returns false if command is on cooldown
     */
    CheckCooldown() {
        if (this.CooldownRate && this.CooldownRate !== 0) {
            const timestamp = new Date().getTime();
            if (!this.LastRun || (timestamp - this.LastRun >= this.CooldownRate)) {
                this.LastRun = timestamp;
                return false;
            }
            return true;
        }
        return false;
    }
    // @ts-ignore
    ContextInjection(context) {
        return {};
    }
    GetArguments(message) {
        const args = this.Arguments;
        if (!args || args) {
            return null;
        }
        if (this.Parametrized === true) {
            return this.GetParameterizedArguments(message.content);
        }
        else {
            return this.GetGenericArguments(message.content);
        }
    }
    GetParameterizedArguments(content) {
        const parts = content.split('--').slice(1);
        const results = {};
        const values = {};
        const args = this.Arguments;
        parts.forEach((part) => {
            const words = part.split(' ');
            if (words[0].indexOf('=') >= 0) {
                const keys = words[0].split('=');
                if (words.length === 1) {
                    values[keys[0]] = keys[1];
                }
                else {
                    const key = keys[0];
                    const value = [keys[1], ...words.slice(1)];
                    values[key] = value.join(' ');
                }
            }
            else {
                values[words[0]] = words.slice(1).join(' ');
            }
        });
        args.forEach((argument) => {
            if (values[argument.name]) {
                results[argument.name] = values[argument.name];
            }
            if (argument.alias && values[argument.alias]) {
                results[argument.name] = values[argument.alias];
            }
        });
        return results;
    }
    GetGenericArguments(content) {
        const parts = content.split(' ').slice(1);
        const args = this.Arguments;
        const results = { args: [] };
        args.forEach((argument, index) => {
            if (parts[index]) {
                results[argument.name] = parts[index];
            }
        });
        return results;
    }
    RemoveAllowedChannel(channelId, local = true) {
        return this.ModifyPermissions('Channel', 'remove', channelId, local);
    }
    RemoveAllowedRole(roleId, local = true) {
        return this.ModifyPermissions('Role', 'remove', roleId, local);
    }
    RemoveAllowedUsers(user, local = true) {
        return this.ModifyPermissions('User', 'remove', user, local);
    }
    async Save() {
        if (this.RequiresDatabase === false) {
            return Promise.resolve();
        }
        let command = await Commands_1.default.findOne({ Namespace: this.Namespace() });
        if (!command) {
            command = new Commands_1.default({
                Namespace: this.Namespace(),
                AllowedChannels: this.AllowedChannels,
                AllowedRoles: this.AllowedRoles,
                AllowedUsers: this.AllowedUsers,
                Data: {}
            });
        }
        command.Data = Object.assign({}, (command.Data || {}), this.Data);
        if (this.Modified) {
            if (!command.Data[this.Name()]) {
                command.Data[this.Name()] = {};
            }
            command.Data[this.Name()] = {
                AllowedChannels: this.AllowedChannels,
                AllowedRoles: this.AllowedRoles,
                AllowedUsers: this.AllowedUsers
            };
        }
        return command.save();
    }
    Validate(message) {
        return this.ValidateRoles(message.member.roles) || this.ValidateUsers(message.member.id);
    }
}
exports.default = Command;
