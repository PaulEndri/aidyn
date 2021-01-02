import Command from '../../Abstractions/Command';
import { Message } from 'discord.js';

class SaveCommand extends Command {
	static NAME = 'saveCommand';
	static NAMESPACE = 'util';

	public Parametrized = true;
	public Lockdown = true;
	public Blurb = 'Command for bot owners and allowed users to save running bot data into a datbase if one has been configured';
	public Arguments = [ { name: 'command' } ];

	public async Run(message: Message, args: any) {
		if (message.author.id !== this.BotContext.Owner) {
			message.channel.send('[Permission Failure] This command is only available to owner');
		}

		const { command } = args;

		const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];

		if (!modifyingCommand) {
			return message.channel.send(`[Error] Command ${command} not found`);
		}

		await modifyingCommand.Save(true);

		return message.channel.send(`[Updated] Command ${command} has been saved`);
	}
}

export default SaveCommand;
