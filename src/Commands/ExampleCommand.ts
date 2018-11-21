import Command from '../Abstractions/Command';
import { Message } from 'discord.js';

class TestCommand extends Command {
    static NAME        = 'TestCommand';
    static TEST_OUTPUT = 'ACCESSED SUCCESSFULLY';

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