import { Command } from "../..";
import { Message } from "discord.js";
declare class Help extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Arguments: {
        name: string;
    }[];
    private RunForCommand;
    Run(message: Message, args: any): Promise<Message | (Message | Message[])[]>;
}
export default Help;
