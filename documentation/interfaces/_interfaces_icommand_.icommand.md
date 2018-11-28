[Aidyn](../README.md) > ["Interfaces/ICommand"](../modules/_interfaces_icommand_.md) > [ICommand](../interfaces/_interfaces_icommand_.icommand.md)

# Interface: ICommand

## Hierarchy

**ICommand**

## Implemented by

* [Command](../classes/_abstractions_command_.command.md)
* [TestCommand](../classes/_commands_examplecommand_.testcommand.md)

## Index

### Properties

* [AllowedChannels](_interfaces_icommand_.icommand.md#allowedchannels)
* [AllowedRoles](_interfaces_icommand_.icommand.md#allowedroles)
* [AllowedUsers](_interfaces_icommand_.icommand.md#allowedusers)
* [Data](_interfaces_icommand_.icommand.md#data)
* [RequiresDatabase](_interfaces_icommand_.icommand.md#requiresdatabase)
* [Run](_interfaces_icommand_.icommand.md#run)
* [Signature](_interfaces_icommand_.icommand.md#signature)

---

## Properties

<a id="allowedchannels"></a>

###  AllowedChannels

**● AllowedChannels**: *`string`[]*

*Defined in [Interfaces/ICommand.ts:4](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L4)*

___
<a id="allowedroles"></a>

###  AllowedRoles

**● AllowedRoles**: *`string`[]*

*Defined in [Interfaces/ICommand.ts:5](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L5)*

___
<a id="allowedusers"></a>

###  AllowedUsers

**● AllowedUsers**: *`string`[]*

*Defined in [Interfaces/ICommand.ts:6](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L6)*

___
<a id="data"></a>

###  Data

**● Data**: *`__type`*

*Defined in [Interfaces/ICommand.ts:7](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L7)*

___
<a id="requiresdatabase"></a>

###  RequiresDatabase

**● RequiresDatabase**: *`boolean`*

*Defined in [Interfaces/ICommand.ts:8](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L8)*

___
<a id="run"></a>

###  Run

**● Run**: *`function`*

*Defined in [Interfaces/ICommand.ts:9](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L9)*

#### Type declaration
▸(message: *`Message`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="signature"></a>

###  Signature

**● Signature**: *`string`*

*Defined in [Interfaces/ICommand.ts:10](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/ICommand.ts#L10)*

___

