[Aidyn](../README.md) > ["Interfaces/IProcessor"](../modules/_interfaces_iprocessor_.md) > [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md)

# Interface: IProcessor

## Hierarchy

**IProcessor**

## Implemented by

* [Processor](../classes/_services_processor_.processor.md)

## Index

### Properties

* [Commands](_interfaces_iprocessor_.iprocessor.md#commands)
* [Context](_interfaces_iprocessor_.iprocessor.md#context)
* [Handle](_interfaces_iprocessor_.iprocessor.md#handle)
* [LoadCommands](_interfaces_iprocessor_.iprocessor.md#loadcommands)
* [Loaded](_interfaces_iprocessor_.iprocessor.md#loaded)
* [Logging](_interfaces_iprocessor_.iprocessor.md#logging)
* [Prefix](_interfaces_iprocessor_.iprocessor.md#prefix)
* [SaveLogs](_interfaces_iprocessor_.iprocessor.md#savelogs)

---

## Properties

<a id="commands"></a>

###  Commands

**● Commands**: *[ICommandList](_interfaces_icommandlist_.icommandlist.md)*

*Defined in [Interfaces/IProcessor.ts:7](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L7)*

___
<a id="context"></a>

###  Context

**● Context**: *[IContext](_interfaces_icontext_.icontext.md)*

*Defined in [Interfaces/IProcessor.ts:8](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L8)*

___
<a id="handle"></a>

###  Handle

**● Handle**: *`function`*

*Defined in [Interfaces/IProcessor.ts:14](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L14)*

#### Type declaration
▸(message: *`Message`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="loadcommands"></a>

###  LoadCommands

**● LoadCommands**: *`function`*

*Defined in [Interfaces/IProcessor.ts:13](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L13)*

#### Type declaration
▸(Commands: *`any`*, useDB: *`boolean`*): `Promise`<[ICommandList](_interfaces_icommandlist_.icommandlist.md)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| Commands | `any` |
| useDB | `boolean` |

**Returns:** `Promise`<[ICommandList](_interfaces_icommandlist_.icommandlist.md)>

___
<a id="loaded"></a>

###  Loaded

**● Loaded**: *`boolean`*

*Defined in [Interfaces/IProcessor.ts:9](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L9)*

___
<a id="logging"></a>

###  Logging

**● Logging**: *`number`*

*Defined in [Interfaces/IProcessor.ts:10](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L10)*

___
<a id="prefix"></a>

###  Prefix

**● Prefix**: *`string`*

*Defined in [Interfaces/IProcessor.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L11)*

___
<a id="savelogs"></a>

###  SaveLogs

**● SaveLogs**: *`function`*

*Defined in [Interfaces/IProcessor.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/IProcessor.ts#L15)*

#### Type declaration
▸(log: *[ILogsModel](_database_models_logs_.ilogsmodel.md)*): `Promise`<`boolean`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| log | [ILogsModel](_database_models_logs_.ilogsmodel.md) |

**Returns:** `Promise`<`boolean`>

___

