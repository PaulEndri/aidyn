[Aidyn](../README.md) > ["Aidyn"](../modules/_aidyn_.md) > [Aidyn](../classes/_aidyn_.aidyn.md)

# Class: Aidyn

## Hierarchy

**Aidyn**

## Index

### Constructors

* [constructor](_aidyn_.aidyn.md#constructor)

### Properties

* [BotToken](_aidyn_.aidyn.md#bottoken)
* [Client](_aidyn_.aidyn.md#client)
* [ConnectionString](_aidyn_.aidyn.md#connectionstring)
* [Context](_aidyn_.aidyn.md#context)
* [Loaded](_aidyn_.aidyn.md#loaded)
* [Processor](_aidyn_.aidyn.md#processor)

### Methods

* [LoadCommands](_aidyn_.aidyn.md#loadcommands)
* [Start](_aidyn_.aidyn.md#start)
* [Stop](_aidyn_.aidyn.md#stop)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Aidyn**(config?: *[IConfig](../interfaces/_interfaces_iconfig_.iconfig.md)*): [Aidyn](_aidyn_.aidyn.md)

*Defined in [Aidyn.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` config | [IConfig](../interfaces/_interfaces_iconfig_.iconfig.md) |

**Returns:** [Aidyn](_aidyn_.aidyn.md)

___

## Properties

<a id="bottoken"></a>

### `<Private>` BotToken

**● BotToken**: *`string`*

*Defined in [Aidyn.ts:13](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L13)*

___
<a id="client"></a>

### `<Private>` Client

**● Client**: *`Client`*

*Defined in [Aidyn.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L11)*

___
<a id="connectionstring"></a>

### `<Private>` ConnectionString

**● ConnectionString**: *`string`*

*Defined in [Aidyn.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L12)*

___
<a id="context"></a>

###  Context

**● Context**: *[Context](_services_context_.context.md)*

*Defined in [Aidyn.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L16)*

___
<a id="loaded"></a>

### `<Private>` Loaded

**● Loaded**: *`boolean`*

*Defined in [Aidyn.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L15)*

___
<a id="processor"></a>

### `<Private>` Processor

**● Processor**: *[Processor](_services_processor_.processor.md)*

*Defined in [Aidyn.ts:14](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L14)*

___

## Methods

<a id="loadcommands"></a>

###  LoadCommands

▸ **LoadCommands**(commands: *`any`*): `Promise`<`any`>

*Defined in [Aidyn.ts:29](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| commands | `any` |

**Returns:** `Promise`<`any`>

___
<a id="start"></a>

###  Start

▸ **Start**(commands?: *`any`*): `Promise`<`any`>

*Defined in [Aidyn.ts:38](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` commands | `any` |

**Returns:** `Promise`<`any`>

___
<a id="stop"></a>

###  Stop

▸ **Stop**(): `Promise`<`any`>

*Defined in [Aidyn.ts:58](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Aidyn.ts#L58)*

**Returns:** `Promise`<`any`>

___

