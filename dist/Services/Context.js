"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Users_1 = __importDefault(require("../Database/Models/Users"));
const Commands_1 = __importDefault(require("../Database/Models/Commands"));
const State_1 = __importDefault(require("../Models/State"));
const CommandList_1 = __importDefault(require("../Models/CommandList"));
const RoleAdmin_1 = require("../Abstractions/Commands/RoleAdmin");
const EMPTY_COMMAND = {
    AllowedChannels: [],
    AllowedRoles: [],
    AllowedUsers: [],
    Data: {}
};
class Context {
    constructor(client, owner) {
        this.Loading = true;
        this.Client = client;
        this.Owner = owner;
    }
    Initialize(dbString) {
        const conString = dbString || process.env.CONNECTION_STRING;
        if (!conString || conString.length === 0) {
            this.Loading = false;
            this.UseDb = false;
            console.log('[MISS] No Datbase provided');
            return Promise.resolve(false);
        }
        return mongoose_1.default
            .connect(dbString || process.env.CONNECTION_STRING)
            .then(async () => {
            const users = await Users_1.default.find();
            const commands = await Commands_1.default.find();
            const usersState = {};
            const commandsState = {};
            users.forEach((user) => {
                usersState[user.Name] = user;
            });
            commands.forEach((command) => {
                commandsState[command.Namespace] = command;
            });
            this.State = new State_1.default(commandsState, usersState);
            this.Loading = false;
            this.UseDb = true;
            return this.Loading;
        })
            .then(() => {
            console.log('[SUCCESS] Database Loaded');
            return Promise.resolve(true);
        })
            .catch((e) => {
            console.error('[ERROR] Database Failed to Load', e);
        });
    }
    async LoadCustomCommands() {
        const namespace = await Commands_1.default.findOne({ Namespace: '__CUSTOM__' });
        const commands = namespace.Data;
        Object.keys(commands).forEach((key) => {
            const dbCommand = commands[key];
            let command;
            const { Type, AllowedChannels, AllowedRoles, AllowedUsers, AllowedGuilds, Data } = dbCommand;
            switch (Type) {
                case 'RoleAdmin':
                    const roleData = Data;
                    command = RoleAdmin_1.GenerateRoleAdmin(key, roleData.Lead, roleData.Role, AllowedGuilds[0]);
                    break;
                default:
                    return;
            }
            if (command) {
                this.LoadedCommands[key.toLowerCase()] = new command(AllowedChannels, AllowedRoles, AllowedUsers, true);
            }
        });
    }
    async LoadCommandsLocal(Commands) {
        const data = new CommandList_1.default();
        Object.keys(Commands).forEach((key) => {
            const { AllowedChannels, AllowedRoles, AllowedUsers } = EMPTY_COMMAND;
            if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
                console.log(`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`);
                return;
            }
            data[key.toLowerCase()] = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, false);
            data[key.toLowerCase()].BotContext = this;
            console.log('[SUCCESS] Loaded Command', key);
        });
        return data;
    }
    async LoadCommandsFromDatabase(Commands) {
        const data = new CommandList_1.default();
        const databaseCommands = this.State.Commands;
        Object.keys(Commands).forEach((key) => {
            const commandData = databaseCommands[key] || Object.assign({}, EMPTY_COMMAND, { Namespace: key });
            const { AllowedChannels, AllowedRoles, AllowedUsers, Data } = commandData;
            if (!Commands[key].NAMESPACE || !Commands[key].NAME) {
                console.log(`[ERROR] Failed to load ${key} because it lacks a NAME and/or NAMESPACE property`);
                return;
            }
            data[key.toLowerCase()] = new Commands[key](AllowedChannels, AllowedRoles, AllowedUsers, true);
            data[key.toLowerCase()].Data = Data;
            data[key.toLowerCase()].BotContext = this;
            console.log('[SUCCESS] Loaded Command', key);
        });
        return data;
    }
    async LoadCommands(Commands, loadCustomCommands = false) {
        if (this.Loading === true) {
            const deferred = new Promise((resolve) => setTimeout(resolve, 300));
            await deferred;
        }
        if (this.UseDb) {
            this.LoadedCommands = await this.LoadCommandsFromDatabase(Commands);
        }
        else {
            this.LoadedCommands = await this.LoadCommandsLocal(Commands);
        }
        if (loadCustomCommands) {
            await this.LoadCustomCommands();
        }
        return this.LoadedCommands;
    }
}
exports.default = Context;
