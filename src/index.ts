import Aidyn from "./app";
import Commands from "./Database/Models/Commands";
import Command from "./Abstractions/Command";

export const exportedModules = {
    Command,
    Schemas: {
        Commands
    }
}

export default Aidyn;