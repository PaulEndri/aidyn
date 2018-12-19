import DisableCommand from "./Permissions/DisableCommand";
import EnableCommand from "./Permissions/EnableCommand";
import ModifyPermissions from "./Permissions/ModifyPermissions";
import Help from "./Utils/Help";

export default {
    [DisableCommand.NAME]:    DisableCommand,
    [EnableCommand.NAME]:     EnableCommand,
    [ModifyPermissions.NAME]: ModifyPermissions,
    [Help.NAME]:              Help
}