import { Command } from "../..";
import { Message } from "discord.js";
import ICommandArgument from "../../Interfaces/ICommandArgument";

class Help extends Command {
    static NAME      = 'help';
    static NAMESPACE = 'util';

    public Parametrized = true;

    // @ts-ignore 
    public async Run(message: Message, args: any) {
        // @ts-ignore
        const commands = this.BotContext.LoadedCommands
            .filter((cmd: Command) => {
                const hasPermission = cmd.Validate(message);
            
                return cmd.Disabled !== true && hasPermission;
            })
            .map((command: Command) => {
                let helpString = `${this.BotContext.Prefix}${command.Name()}`;

                if (command.Arguments && command.Arguments.length > 0) {
                    command.Arguments.forEach((arg: ICommandArgument) => {
                        const prefix = this.Parametrized ? '--' : '';
            
                        helpString = helpString += ` ${prefix}${arg.name}=${arg.type || 'value'}`
                    })
                }

                return helpString;
            })

        if (commands.length <= 0) {
            return message.reply('No commands found');
        }

        const msg = commands.join('\n');

        if (msg.length < 1900) {
            return message.reply(`\`\`\`\n${msg}\`\`\``);
        } else {
            let activeIndex = 0;
            const messages  = [''];

            while (commands.length > 0) {
                const currentCommand = commands.shift();

                if (messages[activeIndex].length + currentCommand.length < 1900) {
                    messages[activeIndex] = `${messages[activeIndex]}\n${currentCommand}`;
                } else {
                    activeIndex           = activeIndex + 1;
                    messages[activeIndex] = `\n${currentCommand}`;
                }
            }

            return Promise.all(messages.map((msg) => message.reply(`\`\`\`\n${msg}\`\`\``)))
        }
    }
}

export default Help;