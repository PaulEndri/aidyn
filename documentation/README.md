
Aidyn: Discord Bot Framework
============================

[![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=aidyn)

Simple Framework for rapidly building Discord Bot Commands jumping straight to the business logic

Features
--------

*   Class based architecture
*   Native Typescript Support
*   Built upon the wonderful Discord.JS
*   State based data handling between commands
*   Support for automatic database backup via MongoDB

Installing
----------

Using npm:

```bash
$ npm install aidyn
```

Using yarn:

```bash
$ yarn install aidyn
```

Requirements
------------

Node v8 LTS or higher

Example
-------

Creating a Class

Javascript

```js
class ExampleCommand extends Command {
    static get NAME() {
        return 'example'
    }

    Name() { 
        return ExampleCommand.NAME
    }

    Namespace() { 
        return 'ExampleNamespace'
    }

    Run(message) {
        const context = this.GetContext(message);

        return message.channel.send(`Command: %example was called with content ${JSON.stringify(context)}`);
    }
}
```

Typescript

```ts
class ExampleCommand extends Command {
    static NAME  = 'example';

    public Name(): string { 
        return ExampleCommand.NAME;
    }
    public Namespace(): string { 
        return 'ExampleNamespace';
    }

    public async Run(message: Message): Promise<any> {
        const context = this.GetContext(message);

        return message.channel.send(`Command: %example was called with content ${JSON.stringify(context)}`);
    }
}
```

Using the framework/class

```js
    const commands = {};
    const prefix = '%';

    comands[ExampleCommand.NAME] = ExampleCommand;
    const aidyn = new Aidyn({
        Prefix: prefix,
        ConnectionString: '',
        BotToken: '',
        Logging: 0
    });

    aidyn.start(commands);
```

Aidyn Constructor Params
------------------------

```js
    const aidyn = new Aidyn({
        ConnectionString: conString, // Database Connection String for a Mongo DB
        BotToken: token, // Discord Bot Token
        Prefix: prefix, // bot prefix, defaults to `%`
        Logging: 0 // (EXPERIMENTAL) 0 for no logging, 1 to log commands, 2 to log everything (NOT RECOMMENDED/),
        CustomProcessor: null // If you need to extend your own processor, you can inject it using this param
    })
```

Message GetContext
------------------

GetContext method of the Command class will process the contents of the message received. Any word that begins with `--` will be added as a property of the resulting object, everything esle will end up being pushed into a generic args property which is an array of strings

Database
--------

Currently, the framework only supports MongoDB

TypeScript
----------

The project is built in tyepscript and thus comes with 100% typescript support out the box

Credits
-------

DiscordJS for making the amazing library they've created Pixel Pub for being giunea pigs

License
-------

MIT

## Index

### External modules

* ["Abstractions/Command"](modules/_abstractions_command_.md)
* ["Aidyn"](modules/_aidyn_.md)
* ["Commands/ExampleCommand"](modules/_commands_examplecommand_.md)
* ["Database/Models/Commands"](modules/_database_models_commands_.md)
* ["Database/Models/Logs"](modules/_database_models_logs_.md)
* ["Database/Models/Users"](modules/_database_models_users_.md)
* ["Interfaces/Database/ICommands"](modules/_interfaces_database_icommands_.md)
* ["Interfaces/Database/ILogs"](modules/_interfaces_database_ilogs_.md)
* ["Interfaces/Database/IUsers"](modules/_interfaces_database_iusers_.md)
* ["Interfaces/ICommand"](modules/_interfaces_icommand_.md)
* ["Interfaces/ICommandList"](modules/_interfaces_icommandlist_.md)
* ["Interfaces/IConfig"](modules/_interfaces_iconfig_.md)
* ["Interfaces/IContext"](modules/_interfaces_icontext_.md)
* ["Interfaces/IDatabase"](modules/_interfaces_idatabase_.md)
* ["Interfaces/IExportedCommand"](modules/_interfaces_iexportedcommand_.md)
* ["Interfaces/IProcessor"](modules/_interfaces_iprocessor_.md)
* ["Interfaces/IState"](modules/_interfaces_istate_.md)
* ["Models/CommandList"](modules/_models_commandlist_.md)
* ["Models/State"](modules/_models_state_.md)
* ["Services/Context"](modules/_services_context_.md)
* ["Services/Database"](modules/_services_database_.md)
* ["Services/Processor"](modules/_services_processor_.md)
* ["Tests/Aidyn.spec"](modules/_tests_aidyn_spec_.md)
* ["Tests/Command.spec"](modules/_tests_command_spec_.md)
* ["index"](modules/_index_.md)

---

