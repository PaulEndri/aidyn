import Command from '../Command';
import { Message, Guild, GuildChannel } from 'discord.js';

abstract class ChannelAdmin extends Command {
    static NAME           = 'ChannelAdmin';
    static NAMESPACE      = 'ChannelAdmin';
    static ROLES          = [''];
    static VOICE_CATEGORY = '';
    static TEXT_CATEGORY  = '';

    public Name(): string { 
        return Object.getPrototypeOf(this).constructor.NAME;
    }
    public Namespace(): string { 
        return Object.getPrototypeOf(this).constructor.NAMESPACE;
    }

    public constructor(channels: string[], roles: string[], users: string[], dbRequired = false) {
        super(channels, roles, users, dbRequired);

        const _roles = Object.getPrototypeOf(this).constructor.ROLES;

        if (_roles && _roles.length > 0) {
            this.AllowedRoles = _roles;
        }
    }

    private async CreateVoiceChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel> {
        const channel = await guild.createChannel(name, 'voice', [], 'Created by Pixel Pub Bot');
                
        if (topic) {
            await channel.setTopic(topic, 'Set by Pixel Pub Bot');
        }

        return channel.setParent(Object.getPrototypeOf(this).constructor.VOICE_CATEGORY);
    }

    private async CreateTextChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel> {
        const channel = await guild.createChannel(name, 'text', [], 'Created by Pixel Pub Bot');
                
        if (topic) {
            await channel.setTopic(topic, 'Set by Pixel Pub Bot');
        }

        return channel.setParent(Object.getPrototypeOf(this).constructor.TEXT_CATEGORY);
    }

    private async RunDelete(message: Message, guild: Guild, channel: string): Promise<any> {
        const channelId     = channel.replace(/\D/g, '');
        const serverChannel = guild.channels.find('id', channelId);
        const deleteMessage = `Deleted by PixelPub on command by ${message.author.username}`;
        const haystack      = [
            Object.getPrototypeOf(this).constructor.TEXT_CATEGORY,
            Object.getPrototypeOf(this).constructor.VOICE_CATEGORY
        ];
    
        if (serverChannel && haystack.includes(serverChannel.parentID)) {
            await serverChannel.delete(deleteMessage);
            return message.channel.send(`Deleted Text Channel ${serverChannel.name} succesfully`);
        } else {
            //They might/should have done the full name to delete a vc, so, instead lets try this
            const serverVoiceChannel = guild.channels.find('name', channel);

            if (serverVoiceChannel && haystack.includes(serverVoiceChannel.parentID)) {
                await serverVoiceChannel.delete(deleteMessage);
                return message.channel.send(`Deleted Voice Channel ${channel} succesfully`);
            }
        }

        return message.channel.send(`Unable to delete ${channel}`);
    }

    public async Run(message: Message): Promise<any> {
        const context = this.GetContext(message, true);
        const {
            text,
            voice,
            topic,
            name,
            remove,
            channel
        } = context;


        if (remove) {
            if (!channel) {
                return message.channel.send('Please specify a channel');
            }
            return await this.RunDelete(message, message.guild, channel);
        }

        if (text === undefined && voice === undefined) {
            message.channel.send('Please specify voice or text');
        } else if (!name) {
            message.channel.send('Please specify a name');
        }

        if (text) {
            return await this.CreateTextChannel(message.guild, name, topic);
        }

        if (voice) {
            return await this.CreateVoiceChannel(message.guild, name, topic);
        }

        return message.channel.send(`Created ${name} channel(s)`);
    }
}

export default ChannelAdmin;