import { Document, Schema, Model, model } from 'mongoose';
import ILogs from '../../Interfaces/Database/ILogs'

const {Types} = Schema;

export interface ILogsModel extends ILogs, Document {};

// const DataSchema: Schema = new Schema({
//     AllowedRoles: [Types.String],
//     AllowedChannels: [Types.String],
//     Name: Types.String
// });

const LogsSchema: Schema = new Schema({
    User      : Types.String,
    CreatedAt : Types.Date,
    Channel   : Types.String,
    Runtime   : Types.Number,
    Command   : Types.String,
    Success   : Types.Boolean,
    Response  : Types.String
});

LogsSchema
    .pre('save', (next) => {
        const now = new Date();

        if (!this.CreatedAt) {
            this.CreatedAt = now;
        }

        next();
    });

const Logs: Model<ILogsModel> = model<ILogsModel>("Logs", LogsSchema);

export default Logs;