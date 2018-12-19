import { Command } from "../..";
import { Message } from "discord.js";
declare class EnableCommand extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Arguments: {
        name: string;
    }[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default EnableCommand;
//# sourceMappingURL=EnableCommand.d.ts.map