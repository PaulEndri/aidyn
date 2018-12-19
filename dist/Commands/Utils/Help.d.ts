import { Command } from "../..";
import { Message } from "discord.js";
declare class Help extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Run(message: Message, args: any): Promise<Message | (Message | Message[])[]>;
}
export default Help;
