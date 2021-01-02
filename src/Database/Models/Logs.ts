import { Document, Schema, Model, model } from 'mongoose';
import { ILogs } from '../../Interfaces/Database/ILogs';

const { Types } = Schema;

export interface ILogsModel extends ILogs, Document {}

const LogsSchema: Schema<ILogs> = new Schema({
	User: Types.String,
	CreatedAt: Types.Date,
	Channel: Types.String,
	Runtime: Types.Number,
	Command: Types.String,
	Success: Types.Boolean,
	Response: Types.String
});

LogsSchema.pre('save', function(next) {
	const now = new Date();

	// @ts-ignore
	if (!this.CreatedAt) {
		// @ts-ignore
		this.CreatedAt = now;
	}

	next();
});

export const Logs: Model<ILogsModel> = model<ILogsModel>('Logs', LogsSchema);
