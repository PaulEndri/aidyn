[Aidyn](../README.md) > ["Services/Processor"](../modules/_services_processor_.md) > [Processor](../classes/_services_processor_.processor.md)

# Class: Processor

## Hierarchy

**Processor**

## Implements

* [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md)

## Index

### Constructors

* [constructor](_services_processor_.processor.md#constructor)

### Properties

* [Commands](_services_processor_.processor.md#commands)
* [Context](_services_processor_.processor.md#context)
* [DbInUse](_services_processor_.processor.md#dbinuse)
* [Loaded](_services_processor_.processor.md#loaded)
* [Logging](_services_processor_.processor.md#logging)
* [Prefix](_services_processor_.processor.md#prefix)
* [DELAY_TIMER](_services_processor_.processor.md#delay_timer)

### Methods

* [Handle](_services_processor_.processor.md#handle)
* [LoadCommands](_services_processor_.processor.md#loadcommands)
* [LoadCommandsFromDatabase](_services_processor_.processor.md#loadcommandsfromdatabase)
* [LoadCommandsLocal](_services_processor_.processor.md#loadcommandslocal)
* [SaveLogs](_services_processor_.processor.md#savelogs)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Processor**(context: *[Context](_services_context_.context.md)*, prefix?: *`string`*, logging?: *`number`*): [Processor](_services_processor_.processor.md)

*Defined in [Services/Processor.ts:23](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| context | [Context](_services_context_.context.md) | - |
| `Default value` prefix | `string` | &quot;!&quot; |
| `Default value` logging | `number` | 0 |

**Returns:** [Processor](_services_processor_.processor.md)

___

## Properties

<a id="commands"></a>

###  Commands

**● Commands**: *[CommandList](_models_commandlist_.commandlist.md)*

*Implementation of [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md).[Commands](../interfaces/_interfaces_iprocessor_.iprocessor.md#commands)*

*Defined in [Services/Processor.ts:18](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L18)*

___
<a id="context"></a>

###  Context

**● Context**: *[Context](_services_context_.context.md)*

*Implementation of [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md).[Context](../interfaces/_interfaces_iprocessor_.iprocessor.md#context)*

*Defined in [Services/Processor.ts:19](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L19)*

___
<a id="dbinuse"></a>

###  DbInUse

**● DbInUse**: *`boolean`*

*Defined in [Services/Processor.ts:20](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L20)*

___
<a id="loaded"></a>

###  Loaded

**● Loaded**: *`boolean`*

*Implementation of [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md).[Loaded](../interfaces/_interfaces_iprocessor_.iprocessor.md#loaded)*

*Defined in [Services/Processor.ts:21](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L21)*

___
<a id="logging"></a>

###  Logging

**● Logging**: *`number`*

*Implementation of [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md).[Logging](../interfaces/_interfaces_iprocessor_.iprocessor.md#logging)*

*Defined in [Services/Processor.ts:22](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L22)*

___
<a id="prefix"></a>

###  Prefix

**● Prefix**: *`string`*

*Implementation of [IProcessor](../interfaces/_interfaces_iprocessor_.iprocessor.md).[Prefix](../interfaces/_interfaces_iprocessor_.iprocessor.md#prefix)*

*Defined in [Services/Processor.ts:23](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L23)*

___
<a id="delay_timer"></a>

### `<Static>` DELAY_TIMER

**● DELAY_TIMER**: *`number`* = 300

*Defined in [Services/Processor.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L16)*

___

## Methods

<a id="handle"></a>

###  Handle

▸ **Handle**(message: *`Message`*): `Promise`<`any`>

*Defined in [Services/Processor.ts:97](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="loadcommands"></a>

###  LoadCommands

▸ **LoadCommands**(Commands: *`any`*, useDB: *`boolean`*): `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

*Defined in [Services/Processor.ts:64](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Commands | `any` |
| useDB | `boolean` |

**Returns:** `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

___
<a id="loadcommandsfromdatabase"></a>

### `<Private>` LoadCommandsFromDatabase

▸ **LoadCommandsFromDatabase**(Commands: *`any`*): `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

*Defined in [Services/Processor.ts:46](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Commands | `any` |

**Returns:** `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

___
<a id="loadcommandslocal"></a>

### `<Private>` LoadCommandsLocal

▸ **LoadCommandsLocal**(Commands: *`any`*): `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

*Defined in [Services/Processor.ts:32](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Commands | `any` |

**Returns:** `Promise`<[ICommandList](../interfaces/_interfaces_icommandlist_.icommandlist.md)>

___
<a id="savelogs"></a>

###  SaveLogs

▸ **SaveLogs**(log: *[ILogsModel](../interfaces/_database_models_logs_.ilogsmodel.md)*): `Promise`<`boolean`>

*Defined in [Services/Processor.ts:83](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Processor.ts#L83)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| log | [ILogsModel](../interfaces/_database_models_logs_.ilogsmodel.md) |

**Returns:** `Promise`<`boolean`>

___

