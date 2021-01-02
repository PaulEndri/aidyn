import { Command } from '../../Abstractions/Command';
import { Message } from 'discord.js';
import { ICommandArgument } from '../../Interfaces/ICommandArgument';

export class Help extends Command {
	static NAME = 'help';
	static NAMESPACE = 'util';

	public Arguments = [ { name: 'command' } ];

	public NAME = 'help';
	public NAMESPACE = 'util';

	private RunForCommand(key: string): string {
		const command = this.BotContext.LoadedCommands[key];

		if (!command) {
			return `[Error] Command ${key} not found`;
		}

		const args = command.Arguments.map((arg: ICommandArgument) => {
			const { name, text, type } = arg;
			let response = `\t${name}:\n\t\tType: ${type || 'string'}`;

			if (text) {
				response += `\n\t\tInfo: ${text}`;
			}

			return response;
		});

		return `\nHelp for command: ${key}\n\t${command.Blurb}\n\n${args.join('\n')}`;
	}

	// @ts-ignore
	public async Run(message: Message, args: any) {
		if (args && args.command) {
			return message.reply(this.RunForCommand(args.command));
		}

		const commands = Object.values<Command>(this.BotContext.LoadedCommands)
			.filter((cmd: Command) => {
				const hasPermission = cmd.Validate(message);

				return cmd.Disabled !== true && hasPermission && cmd.Name !== 'help';
			})
			.map((command: Command) => {
				let helpString = `\n${this.BotContext.Prefix}${command.Name.toLowerCase()}`;

				if (command.Arguments && command.Arguments.length > 0) {
					command.Arguments.forEach((arg: ICommandArgument) => {
						const prefix = command.Parametrized ? '--' : '';

						helpString = helpString += `\n\t${prefix}${arg.name}=${arg.type ||
							'value'}`;
					});
				}

				return helpString;
			});

		if (commands.length <= 0) {
			return message.reply('No commands found');
		}

		const msg = commands.join('\n');

		if (msg.length < 1900) {
			return message.reply(
				`Type ${this.BotContext
					.Prefix}help (command) for details about a specific command\n\`\`\`\n${msg}\`\`\``
			);
		} else {
			let activeIndex = 0;
			const messages = [ '' ];

			while (commands.length > 0) {
				const currentCommand = commands.shift();

				if (messages[activeIndex].length + currentCommand.length < 1900) {
					messages[activeIndex] = `${messages[activeIndex]}\n${currentCommand}`;
				} else {
					activeIndex = activeIndex + 1;
					messages[activeIndex] = `\n${currentCommand}`;
				}
			}

			message.channel.send(
				`Type ${this.BotContext.Prefix}help (command) for details about a specific command`
			);
			return Promise.all(messages.map((msg) => message.channel.send(`\`\`\`\n${msg}\`\`\``)));
		}
	}
}
