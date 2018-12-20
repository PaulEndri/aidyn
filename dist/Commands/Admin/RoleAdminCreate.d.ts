import { Command } from "../..";
import { Message } from "discord.js";
declare class RoleAdminCreate extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Blurb: string;
    Arguments: {
        name: string;
        type: string;
        text: string;
    }[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default RoleAdminCreate;