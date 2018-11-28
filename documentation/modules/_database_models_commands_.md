[Aidyn](../README.md) > ["Database/Models/Commands"](../modules/_database_models_commands_.md)

# External module: "Database/Models/Commands"

## Index

### Interfaces

* [ICommandsModel](../interfaces/_database_models_commands_.icommandsmodel.md)

### Variables

* [Commands](_database_models_commands_.md#commands)
* [CommandsSchema](_database_models_commands_.md#commandsschema)
* [Types](_database_models_commands_.md#types)

---

## Variables

<a id="commands"></a>

### `<Const>` Commands

**● Commands**: *`Model`<[ICommandsModel](../interfaces/_database_models_commands_.icommandsmodel.md)>* =  model<ICommandsModel>("Commands", CommandsSchema)

*Defined in [Database/Models/Commands.ts:28](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Commands.ts#L28)*

___
<a id="commandsschema"></a>

### `<Const>` CommandsSchema

**● CommandsSchema**: *`Schema`* =  new Schema({
    AllowedRoles:    [Types.String],
    AllowedChannels: [Types.String],
    AllowedUsers:    [Types.String],
    CreatedAt:       [Types.Date],
    Data:            Types.Mixed,
    Namespace:       Types.String
})

*Defined in [Database/Models/Commands.ts:8](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Commands.ts#L8)*

___
<a id="types"></a>

###  Types

**● Types**: *`Types`*

*Defined in [Database/Models/Commands.ts:4](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Commands.ts#L4)*

___

