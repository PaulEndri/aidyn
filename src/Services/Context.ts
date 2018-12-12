import IContext from '../Interfaces/IContext';
import IState from '../Interfaces/IState';
import mongoose from 'mongoose';
import Users from '../Database/Models/Users';
import Commands from '../Database/Models/Commands';
import State from '../Models/State';
import { Client } from 'discord.js';

export default class Context implements IContext {
    public Client  : Client;
    public Loading : boolean;
    public State   : IState;

    constructor(client: Client) {
        this.Loading = true;
        this.Client  = client;
    }

    public Initialize(dbString?: string): Promise<any> {
        const conString = dbString || process.env.CONNECTION_STRING;

        if (!conString || conString.length === 0) {
            this.Loading = false;
            console.log('[MISS] No Datbase provided');
            return Promise.resolve(false);
        }

        return mongoose
            .connect(dbString || process.env.CONNECTION_STRING)
            .then(async () => {
                const users         = await Users.find();
                const commands      = await Commands.find();
                const usersState    = {};
                const commandsState = {};

                users.forEach((user) => { 
                    usersState[user.Name] = user;
                })

                commands.forEach((command) => {
                    commandsState[command.Namespace] = command;
                })

                this.State   = new State(commandsState, usersState);
                this.Loading = false;

                return this.Loading;
            })
            .then(() => {
                console.log('[SUCCESS] Database Loaded');

                return Promise.resolve(true);
            })
            .catch((e) => {
                console.error('[ERROR] Database Failed to Load', e);
            })
    }
    
    public async Save() {
        
    }
}