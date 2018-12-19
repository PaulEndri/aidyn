import { Document, Schema, Model } from 'mongoose';
import ICommands from '../../Interfaces/Database/ICommands';
export interface ICommandsModel extends ICommands, Document {
}
export declare const CommandsSchema: Schema;
declare const Commands: Model<ICommandsModel>;
export default Commands;
