import DisableCommand from './Permissions/DisableCommand';
import EnableCommand from './Permissions/EnableCommand';
import ModifyPermissions from './Permissions/ModifyPermissions';
import Help from './Utils/Help';
import RoleAdminCreate from './Admin/RoleAdminCreate';
import SaveCommand from './Utils/SaveCommand';
import DebugCommand from './Utils/DebugCommand';

export default {
	[DisableCommand.NAME]: DisableCommand,
	[EnableCommand.NAME]: EnableCommand,
	[ModifyPermissions.NAME]: ModifyPermissions,
	[Help.NAME]: Help,
	[RoleAdminCreate.NAME]: RoleAdminCreate,
	[SaveCommand.NAME]: SaveCommand,
	[DebugCommand.NAME]: DebugCommand
};
