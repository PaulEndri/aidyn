"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Types } = mongoose_1.Schema;
;
const LogsSchema = new mongoose_1.Schema({
    User: Types.String,
    CreatedAt: Types.Date,
    Channel: Types.String,
    Runtime: Types.Number,
    Command: Types.String,
    Success: Types.Boolean,
    Response: Types.String
});
LogsSchema
    .pre('save', (next) => {
    const now = new Date();
    if (!this.CreatedAt) {
        this.CreatedAt = now;
    }
    next();
});
const Logs = mongoose_1.model("Logs", LogsSchema);
exports.default = Logs;
