import Context from './Services/Context';
import IConfig from './Interfaces/IConfig';
export default class Aidyn {
    private Client;
    private ConnectionString;
    private BotToken;
    private Processor;
    private Loaded;
    private ReloadCustoms;
    Context: Context;
    constructor(config?: IConfig);
    LoadCommands(commands: any): Promise<any>;
    Start(commands?: any): Promise<Aidyn>;
    Stop(): Promise<any>;
}
