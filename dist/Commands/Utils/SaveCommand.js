"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class SaveCommand extends __1.Command {
    constructor() {
        super(...arguments);
        this.Parametrized = true;
        this.Blurb = 'Command for bot owners and allowed users to save running bot data into a datbase if one has been configured';
        this.Arguments = [
            { name: 'command' },
        ];
    }
    async Run(message, args) {
        if (message.author.id !== this.BotContext.Owner) {
            message.reply('[Permission Failure] This command is only available to owner');
        }
        const { command } = args;
        const modifyingCommand = this.BotContext.LoadedCommands[command.toLowerCase()];
        if (!modifyingCommand) {
            return message.reply(`[Error] Command ${command} not found`);
        }
        await modifyingCommand.Save(true);
        return message.reply(`[Updated] Command ${command} has been saved`);
    }
}
SaveCommand.NAME = 'saveCommand';
SaveCommand.NAMESPACE = 'utl';
exports.default = SaveCommand;
