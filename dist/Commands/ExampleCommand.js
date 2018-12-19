"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../Abstractions/Command"));
/**
 * @module command
 * @internal
 */
class TestCommand extends Command_1.default {
    constructor() {
        super(...arguments);
        this.Signature = 'test command';
    }
    async Run(message) {
        return message.channel.send(TestCommand.TEST_OUTPUT);
    }
}
TestCommand.NAME = 'TestCommand';
TestCommand.TEST_OUTPUT = 'ACCESSED SUCCESSFULLY';
exports.default = TestCommand;
//# sourceMappingURL=ExampleCommand.js.map