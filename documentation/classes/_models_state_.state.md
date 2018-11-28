[Aidyn](../README.md) > ["Models/State"](../modules/_models_state_.md) > [State](../classes/_models_state_.state.md)

# Class: State

## Hierarchy

**State**

## Implements

* [IState](../interfaces/_interfaces_istate_.istate.md)

## Index

### Constructors

* [constructor](_models_state_.state.md#constructor)

### Properties

* [Commands](_models_state_.state.md#commands)
* [Users](_models_state_.state.md#users)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new State**(commands: *`any`*, users: *`any`*): [State](_models_state_.state.md)

*Defined in [Models/State.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Models/State.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| commands | `any` |
| users | `any` |

**Returns:** [State](_models_state_.state.md)

___

## Properties

<a id="commands"></a>

###  Commands

**● Commands**: *`object`*

*Implementation of [IState](../interfaces/_interfaces_istate_.istate.md).[Commands](../interfaces/_interfaces_istate_.istate.md#commands)*

*Defined in [Models/State.ts:9](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Models/State.ts#L9)*

#### Type declaration

[index: `string`]: [ICommands](../interfaces/_interfaces_database_icommands_.icommands.md)

___
<a id="users"></a>

###  Users

**● Users**: *`object`*

*Implementation of [IState](../interfaces/_interfaces_istate_.istate.md).[Users](../interfaces/_interfaces_istate_.istate.md#users)*

*Defined in [Models/State.ts:6](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Models/State.ts#L6)*

#### Type declaration

[index: `string`]: [IUsers](../interfaces/_interfaces_database_iusers_.iusers.md)

___

