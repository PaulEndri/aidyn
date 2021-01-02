import { Document, Schema, Model, model } from 'mongoose';
import { IUsers } from '../../Interfaces/Database/IUsers';

const { Types } = Schema;

export interface IUsersModel extends IUsers, Document {}

const UsersSchema: Schema = new Schema({
	CreatedAt: Types.Date,
	Name: Types.String,
	Roles: [ Types.String ]
});

UsersSchema.pre('save', function(next) {
	const now = new Date();

	// @ts-ignore
	if (!this.CreatedAt) {
		// @ts-ignore

		this.CreatedAt = now;
	}

	next();
});

export const Users: Model<IUsersModel> = model<IUsersModel>('Users', UsersSchema);
