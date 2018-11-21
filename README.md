# Aidyn: Discord Bot Framework

[![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=aidyn)

Simple Framework for rapidly building Discord Bot Commands jumping straight to the business logic

## Features

- Class based architecture
- Native Typescript Support
- Built upon the wonderful Discord.JS
- State based data handling between commands
- Support for automatic database backup via MongoDB

## Installing

Using npm:

```bash
$ npm install aidyn
```

Using yarn:

```bash
$ yarn install aidyn
```

## Requirements

Node v8 LTS or higher

## Example

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

## Aidyn Constructor Params

```js
    const aidyn = new Aidyn({
        ConnectionString: conString, // Database Connection String for a Mongo DB
        BotToken: token, // Discord Bot Token
        Prefix: prefix, // bot prefix, defaults to `%`
        Logging: 0 // (EXPERIMENTAL) 0 for no logging, 1 to log commands, 2 to log everything (NOT RECOMMENDED/),
        CustomProcessor: null // If you need to extend your own processor, you can inject it using this param
    })
```

## Message GetContext

GetContext method of the Command class will process the contents of the message received.
Any word that begins with `--` will be added as a property of the resulting object,
everything esle will end up being pushed into a generic args property which is an array of strings

## Database

Currently, the framework only supports MongoDB


## TypeScript

The project is built in tyepscript and thus comes with 100% typescript support out the box

## Credits

DiscordJS for making the amazing library they've created
Pixel Pub for being giunea pigs
## License

MIT