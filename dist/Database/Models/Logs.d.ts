import { Document, Model } from 'mongoose';
import ILogs from '../../Interfaces/Database/ILogs';
export interface ILogsModel extends ILogs, Document {
}
declare const Logs: Model<ILogsModel>;
export default Logs;
//# sourceMappingURL=Logs.d.ts.map