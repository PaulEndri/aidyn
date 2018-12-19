"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Types } = mongoose_1.Schema;
;
exports.CommandsSchema = new mongoose_1.Schema({
    AllowedRoles: [Types.String],
    AllowedChannels: [Types.String],
    AllowedUsers: [Types.String],
    CreatedAt: [Types.Date],
    Data: Types.Mixed,
    Namespace: Types.String
});
exports.CommandsSchema
    .pre('save', (next) => {
    const now = new Date();
    if (!this.CreatedAt) {
        this.CreatedAt = now;
    }
    next();
});
const Commands = mongoose_1.model("Commands", exports.CommandsSchema);
exports.default = Commands;
