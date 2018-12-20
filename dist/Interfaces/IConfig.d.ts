import Processor from "../Services/Processor";
export default interface IConfig {
    BotToken?: string;
    ConnectionString?: string;
    Logging?: number;
    Prefix?: string;
    CustomProcessor?: Processor;
    Owner?: string;
    ReloadCustoms?: boolean;
}
