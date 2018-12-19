import { Command } from "../..";
import { Message } from "discord.js";
declare class ModifyPermissions extends Command {
    static NAME: string;
    static NAMESPACE: string;
    Parametrized: boolean;
    Arguments: ({
        name: string;
        type?: undefined;
    } | {
        name: string;
        type: string;
    })[];
    Run(message: Message, args: any): Promise<Message | Message[]>;
}
export default ModifyPermissions;
//# sourceMappingURL=ModifyPermissions.d.ts.map