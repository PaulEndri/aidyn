"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Types } = mongoose_1.Schema;
;
const UsersSchema = new mongoose_1.Schema({
    CreatedAt: Types.Date,
    Name: Types.String,
    Roles: [Types.String]
});
UsersSchema
    .pre('save', (next) => {
    const now = new Date();
    if (!this.CreatedAt) {
        this.CreatedAt = now;
    }
    next();
});
const Users = mongoose_1.model("Users", UsersSchema);
exports.default = Users;
//# sourceMappingURL=Users.js.map