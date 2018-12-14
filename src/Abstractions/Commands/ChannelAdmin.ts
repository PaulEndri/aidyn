import Command from '../Command';
import { Message, Guild, GuildChannel, PermissionOverwrites, Collection } from 'discord.js';

abstract class ChannelAdmin extends Command {
    static NAME           = 'ChannelAdmin';
    static NAMESPACE      = 'ChannelAdmin';
    static VOICE_CATEGORY = '';
    static TEXT_CATEGORY  = '';

    public get TextCategoryId(): string {
        return Object.getPrototypeOf(this).constructor.TEXT_CATEGORY;
    }

    public get VoiceCategoryId(): string {
        return Object.getPrototypeOf(this).constructor.VOICE_CATEGORY;
    }

    public constructor(channels: string[], roles: string[], users: string[], dbRequired = false) {
        super(channels, roles, users, dbRequired);

        const _roles = Object.getPrototypeOf(this).constructor.ROLES;

        if (_roles && _roles.length > 0) {
            this.AllowedRoles = _roles;
        }
    }

    public async CreateVoiceChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel> {
        const parent      = guild.channels.find((_channel) => _channel.id === this.VoiceCategoryId)
        const permissions = this.mapPermissions(parent.permissionOverwrites)

    
        const channel = await guild.createChannel(name, 'voice', permissions, 'Created using Aidyn');

        if (topic) {
            await channel.setTopic(topic, 'Set using Aidyn');
        }

        return channel.setParent(this.VoiceCategoryId);
    }

    public async CreateTextChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel> {
        const parent      = guild.channels.find((_channel) => _channel.id === this.TextCategoryId)
        const permissions = this.mapPermissions(parent.permissionOverwrites)

        const channel = await guild.createChannel(name, 'text', permissions, 'Created using Aidyn');

        if (topic) {
            await channel.setTopic(topic, 'Set using Aidyn');
        }

        return channel.setParent(this.TextCategoryId);
    }

    private mapPermissions(permissions: Collection<string, PermissionOverwrites>): any {
        return permissions.map(({
            allow, id, deny, type
        }) => ({
            allow, id, deny, type
        }))
    }

    private async RunDelete(message: Message, guild: Guild, channel: string): Promise<any> {
        const channelId     = channel.replace(/\D/g, '');
        const serverChannel = guild.channels.find(({id}) => id === channelId);
        const deleteMessage = `Deleted by PixelPub on command by ${message.author.username}`;
        const haystack      = [
            this.TextCategoryId,
            this.VoiceCategoryId
        ];
    
        if (serverChannel && haystack.includes(serverChannel.parentID)) {
            await serverChannel.delete(deleteMessage);
            return message.channel.send(`Deleted Text Channel ${serverChannel.name} succesfully`);
        } else {
            //They might/should have done the full name to delete a vc, so, instead lets try this
            const serverVoiceChannel = guild.channels.find(({name}) => name === channel);

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


        if (remove !== undefined) {
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

        if (text !== undefined) {
            await this.CreateTextChannel(message.guild, name, topic);
        }

        if (voice !== undefined) {
            await this.CreateVoiceChannel(message.guild, name, topic);
        }

        return message.channel.send(`Created ${name} channel(s)`);
    }
}

export default ChannelAdmin;