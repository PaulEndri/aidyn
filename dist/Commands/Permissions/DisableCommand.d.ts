import { Command } from "../..";
import { Message } from "discord.js";
declare class DisableCommand extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Arguments: {
        name: string;
        type: string;
        text: string;
    }[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default DisableCommand;
//# sourceMappingURL=DisableCommand.d.ts.map