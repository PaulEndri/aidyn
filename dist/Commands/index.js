"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DisableCommand_1 = __importDefault(require("./Permissions/DisableCommand"));
const EnableCommand_1 = __importDefault(require("./Permissions/EnableCommand"));
const ModifyPermissions_1 = __importDefault(require("./Permissions/ModifyPermissions"));
const Help_1 = __importDefault(require("./Utils/Help"));
const RoleAdminCreate_1 = __importDefault(require("./Admin/RoleAdminCreate"));
const SaveCommand_1 = __importDefault(require("./Utils/SaveCommand"));
const DebugCommand_1 = __importDefault(require("./Utils/DebugCommand"));
exports.default = {
    [DisableCommand_1.default.NAME]: DisableCommand_1.default,
    [EnableCommand_1.default.NAME]: EnableCommand_1.default,
    [ModifyPermissions_1.default.NAME]: ModifyPermissions_1.default,
    [Help_1.default.NAME]: Help_1.default,
    [RoleAdminCreate_1.default.NAME]: RoleAdminCreate_1.default,
    [SaveCommand_1.default.NAME]: SaveCommand_1.default,
    [DebugCommand_1.default.NAME]: DebugCommand_1.default
};
