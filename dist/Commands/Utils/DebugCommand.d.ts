import { Command } from "../..";
import { Message } from "discord.js";
declare class DebugCommand extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Lockdown: boolean;
    Blurb: string;
    Arguments: {
        name: string;
    }[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default DebugCommand;
