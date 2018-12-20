import { Command } from "../..";
import { Message } from "discord.js";
declare class SaveCommand extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Blurb: string;
    Arguments: {
        name: string;
    }[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default SaveCommand;
