import Command from '../Abstractions/Command';
import { Message } from 'discord.js';

/**
 * @module command
 * @internal
 */
class TestCommand extends Command {
    static NAME        = 'TestCommand';
    static TEST_OUTPUT = 'ACCESSED SUCCESSFULLY';

    public Signature = 'test command';

    public Name(): string { 
        return TestCommand.NAME;
    }
    public Namespace(): string { 
        return 'TestCommand';
    }

    public async Run(message: Message): Promise<any> {
       return message.channel.send(TestCommand.TEST_OUTPUT);
    }
}

export default TestCommand;