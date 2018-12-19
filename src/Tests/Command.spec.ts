// import { expect } from 'chai';
// import 'mocha';
// import TestCommand from '../Commands/ExampleCommand';
// import { Message } from 'discord.js';

// const MOCK_MESSAGE = {
//     channel: {
//         send: (val) => Promise.resolve(val)
//     }
// }

// describe('Test Command', () => {
//     const command = new TestCommand([], [], [], false);

//     it ('Should have instantiated with no problem', () => {
//         expect(command).to.not.be.null;
//         expect(command).to.not.be.undefined;
//     })

//     it ('Should have a name and namespace property', () => {
//         expect(command.Name()).to.be.a('string');
//         expect(command.Namespace()).to.be.a('string');
//     })

//     it ('Should be able to run with no problems', async () => {
//         const test = command.Run(<Message>MOCK_MESSAGE);

//         expect(test).to.be.a('Promise');

//         const test2 = await test;

//         expect(test2).to.equal(TestCommand.TEST_OUTPUT);
//     })
// })
