import Command from '../../Abstractions/Command';
import { Message } from 'discord.js';

class DebugCommand extends Command {
	static NAME = 'DebugCommand';
	static NAMESPACE = 'util';

	public Parametrized = true;
	public Lockdown = true;
	public Blurb = 'Owner only plz';
	public Arguments = [ { name: 'command' } ];

	public async Run(message: Message, args: any) {
		if (message.author.id !== this.BotContext.Owner) {
			message.channel.send('[Permission Failure] This command is only available to owner');
		}

		const { command } = args;

		const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];

		message.channel.send(`***DATA***\`\`\`\n${modifyingCommand.Data}\`\`\``);
		message.channel.send(`***CHANNELS***\`\`\`\n${modifyingCommand.AllowedChannels}\`\`\``);
		message.channel.send(`***ROLES***\`\`\`\n${modifyingCommand.AllowedRoles}\`\`\``);
		message.channel.send(`***USERS***\`\`\`\n${modifyingCommand.AllowedUsers}\`\`\``);
		message.channel.send(`***GUILDS***\`\`\`\n${modifyingCommand.AllowedGuilds}\`\`\``);

		return message.reply('GL HF');
	}
}

export default DebugCommand;
