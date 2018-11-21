import { CommandsSchema } from "./Database/Models/Commands";
import Aidyn from './Aidyn';

export const Command = require('./Abstractions/Command');
export const CommandSchema = CommandsSchema;
export const Processor = require('./Services/Processor');

export default Aidyn;