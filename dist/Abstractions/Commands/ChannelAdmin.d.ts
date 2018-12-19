import Command from '../Command';
import { Message, Guild, GuildChannel } from 'discord.js';
declare abstract class ChannelAdmin extends Command {
    static NAME: string;
    static NAMESPACE: string;
    static VOICE_CATEGORY: string;
    static TEXT_CATEGORY: string;
    Parametrized: boolean;
    Arguments: {
        name: string;
        type: string;
        text: string;
    }[];
    readonly TextCategoryId: string;
    readonly VoiceCategoryId: string;
    constructor(channels: string[], roles: string[], users: string[], dbRequired?: boolean);
    CreateVoiceChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel>;
    CreateTextChannel(guild: Guild, name: string, topic?: string): Promise<GuildChannel>;
    private mapPermissions;
    private RunDelete;
    Run(message: Message, args: any): Promise<any>;
}
export default ChannelAdmin;
//# sourceMappingURL=ChannelAdmin.d.ts.map