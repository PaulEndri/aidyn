import { Document, Model } from 'mongoose';
import IUsers from '../../Interfaces/Database/IUsers';
export interface IUsersModel extends IUsers, Document {
}
declare const Users: Model<IUsersModel>;
export default Users;
