[Aidyn](../README.md) > ["Database/Models/Logs"](../modules/_database_models_logs_.md)

# External module: "Database/Models/Logs"

## Index

### Interfaces

* [ILogsModel](../interfaces/_database_models_logs_.ilogsmodel.md)

### Variables

* [Logs](_database_models_logs_.md#logs)
* [LogsSchema](_database_models_logs_.md#logsschema)
* [Types](_database_models_logs_.md#types)

---

## Variables

<a id="logs"></a>

### `<Const>` Logs

**● Logs**: *`Model`<[ILogsModel](../interfaces/_database_models_logs_.ilogsmodel.md)>* =  model<ILogsModel>("Logs", LogsSchema)

*Defined in [Database/Models/Logs.ts:29](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Logs.ts#L29)*

___
<a id="logsschema"></a>

### `<Const>` LogsSchema

**● LogsSchema**: *`Schema`* =  new Schema({
    User      : Types.String,
    CreatedAt : Types.Date,
    Channel   : Types.String,
    Runtime   : Types.Number,
    Command   : Types.String,
    Success   : Types.Boolean,
    Response  : Types.String
})

*Defined in [Database/Models/Logs.ts:8](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Logs.ts#L8)*

___
<a id="types"></a>

###  Types

**● Types**: *`Types`*

*Defined in [Database/Models/Logs.ts:4](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Logs.ts#L4)*

___

