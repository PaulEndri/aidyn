import Command from '../Abstractions/Command';
import { Message } from 'discord.js';
/**
 * @module command
 * @internal
 */
declare class TestCommand extends Command {
    static NAME: string;
    static TEST_OUTPUT: string;
    Signature: string;
    Run(message: Message): Promise<any>;
}
export default TestCommand;
