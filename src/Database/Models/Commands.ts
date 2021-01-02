import { Document, Schema, Model, model } from 'mongoose';
import { ICommands as IDBCommands } from '../../Interfaces/Database/ICommands';

const { Types } = Schema;

export interface ICommandsModel extends IDBCommands, Document {}

export const CommandsSchema: Schema<IDBCommands> = new Schema({
	AllowedRoles: [ Types.String ],
	AllowedChannels: [ Types.String ],
	AllowedUsers: [ Types.String ],
	AllowedGuilds: [ Types.String ],
	CreatedAt: [ Types.Date ],
	Data: Types.Mixed,
	Namespace: Types.String
});

CommandsSchema.pre('save', function(next) {
	const now = new Date();

	// @ts-ignore
	if (!this.CreatedAt) {
		// @ts-ignore

		this.CreatedAt = now;
	}

	next();
});

export const Commands: Model<ICommandsModel> = model<ICommandsModel>('Commands', CommandsSchema);
