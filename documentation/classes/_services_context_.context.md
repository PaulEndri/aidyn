[Aidyn](../README.md) > ["Services/Context"](../modules/_services_context_.md) > [Context](../classes/_services_context_.context.md)

# Class: Context

## Hierarchy

**Context**

## Implements

* [IContext](../interfaces/_interfaces_icontext_.icontext.md)

## Index

### Constructors

* [constructor](_services_context_.context.md#constructor)

### Properties

* [Client](_services_context_.context.md#client)
* [Loading](_services_context_.context.md#loading)
* [State](_services_context_.context.md#state)

### Methods

* [Initialize](_services_context_.context.md#initialize)
* [Save](_services_context_.context.md#save)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Context**(client: *`Client`*): [Context](_services_context_.context.md)

*Defined in [Services/Context.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| client | `Client` |

**Returns:** [Context](_services_context_.context.md)

___

## Properties

<a id="client"></a>

###  Client

**● Client**: *`Client`*

*Implementation of [IContext](../interfaces/_interfaces_icontext_.icontext.md).[Client](../interfaces/_interfaces_icontext_.icontext.md#client)*

*Defined in [Services/Context.ts:10](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L10)*

___
<a id="loading"></a>

###  Loading

**● Loading**: *`boolean`*

*Implementation of [IContext](../interfaces/_interfaces_icontext_.icontext.md).[Loading](../interfaces/_interfaces_icontext_.icontext.md#loading)*

*Defined in [Services/Context.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L11)*

___
<a id="state"></a>

###  State

**● State**: *[IState](../interfaces/_interfaces_istate_.istate.md)*

*Implementation of [IContext](../interfaces/_interfaces_icontext_.icontext.md).[State](../interfaces/_interfaces_icontext_.icontext.md#state)*

*Defined in [Services/Context.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L12)*

___

## Methods

<a id="initialize"></a>

###  Initialize

▸ **Initialize**(dbString?: *`string`*): `Promise`<`any`>

*Defined in [Services/Context.ts:19](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` dbString | `string` |

**Returns:** `Promise`<`any`>

___
<a id="save"></a>

###  Save

▸ **Save**(): `Promise`<`void`>

*Defined in [Services/Context.ts:59](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Services/Context.ts#L59)*

**Returns:** `Promise`<`void`>

___

