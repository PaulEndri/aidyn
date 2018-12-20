"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../Command"));
class ChannelAdmin extends Command_1.default {
    constructor(channels, roles, users, dbRequired = false) {
        super(channels, roles, users, dbRequired);
        this.Parametrized = true;
        this.Lockdown = true;
        this.Arguments = [
            { name: 'name', type: 'string', text: 'Name Of Channel' },
            { name: 'text', type: 'boolean', text: 'Is the channel a text channel?' },
            { name: 'topic', type: 'string', text: 'Channel Topic' },
            { name: 'remove', type: 'boolean', text: 'Is the channel being removed' },
            { name: 'voice', type: 'boolean', text: 'Is the channel a voice channel?' },
            { name: 'channel', type: '*', text: 'Name or tag of channel being removed' }
        ];
        const _roles = Object.getPrototypeOf(this).constructor.ROLES;
        if (_roles && _roles.length > 0 && (!roles || roles.length < 0)) {
            this.AllowedRoles = _roles;
        }
    }
    get TextCategoryId() {
        return Object.getPrototypeOf(this).constructor.TEXT_CATEGORY;
    }
    get VoiceCategoryId() {
        return Object.getPrototypeOf(this).constructor.VOICE_CATEGORY;
    }
    async CreateVoiceChannel(guild, name, topic) {
        const parent = guild.channels.find((_channel) => _channel.id === this.VoiceCategoryId);
        const permissions = this.mapPermissions(parent.permissionOverwrites);
        const channel = await guild.createChannel(name, 'voice', permissions, 'Created using Aidyn');
        if (topic) {
            await channel.setTopic(topic, 'Set using Aidyn');
        }
        return channel.setParent(this.VoiceCategoryId);
    }
    async CreateTextChannel(guild, name, topic) {
        const parent = guild.channels.find((_channel) => _channel.id === this.TextCategoryId);
        const permissions = this.mapPermissions(parent.permissionOverwrites);
        const channel = await guild.createChannel(name, 'text', permissions, 'Created using Aidyn');
        if (topic) {
            await channel.setTopic(topic, 'Set using Aidyn');
        }
        return channel.setParent(this.TextCategoryId);
    }
    mapPermissions(permissions) {
        return permissions.map(({ allow, id, deny, type }) => ({
            allow, id, deny, type
        }));
    }
    async RunDelete(message, guild, channel) {
        const channelId = channel.replace(/\D/g, '');
        const serverChannel = guild.channels.find(({ id }) => id === channelId);
        const deleteMessage = `Deleted by PixelPub on command by ${message.author.username}`;
        const haystack = [
            this.TextCategoryId,
            this.VoiceCategoryId
        ];
        if (serverChannel && haystack.includes(serverChannel.parentID)) {
            await serverChannel.delete(deleteMessage);
            return message.channel.send(`[Success] Deleted Text Channel ${serverChannel.name}`);
        }
        else {
            //They might/should have done the full name to delete a vc, so, instead lets try this
            const serverVoiceChannel = guild.channels.find(({ name }) => name === channel);
            if (serverVoiceChannel && haystack.includes(serverVoiceChannel.parentID)) {
                await serverVoiceChannel.delete(deleteMessage);
                return message.channel.send(`[Success] Deleted Voice Channel ${channel} succesfully`);
            }
        }
        return message.channel.send(`[Error] Unable to delete ${channel}`);
    }
    async Run(message, args) {
        const { text, voice, topic, name, remove, channel } = args;
        if (remove !== undefined) {
            if (!channel) {
                return message.channel.send('[Missing Parameter] Please specify a channel');
            }
            return await this.RunDelete(message, message.guild, channel);
        }
        if (text === undefined && voice === undefined) {
            message.channel.send('[Missing Parameter]  Please specify voice or text');
        }
        else if (!name) {
            message.channel.send('[Missing Parameter]  Please specify a name');
        }
        if (text !== undefined) {
            await this.CreateTextChannel(message.guild, name, topic);
            return message.channel.send(`[Success] Created ${name} channel(s)`);
        }
        if (voice !== undefined) {
            await this.CreateVoiceChannel(message.guild, name, topic);
            return message.channel.send(`[Success] Created ${name} channel(s)`);
        }
    }
}
ChannelAdmin.NAME = 'ChannelAdmin';
ChannelAdmin.NAMESPACE = 'ChannelAdmin';
ChannelAdmin.VOICE_CATEGORY = '';
ChannelAdmin.TEXT_CATEGORY = '';
exports.default = ChannelAdmin;
