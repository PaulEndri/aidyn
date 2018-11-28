[Aidyn](../README.md) > ["Commands/ExampleCommand"](../modules/_commands_examplecommand_.md) > [TestCommand](../classes/_commands_examplecommand_.testcommand.md)

# Class: TestCommand

*__internal__*: 

## Hierarchy

 [Command](_abstractions_command_.command.md)

**↳ TestCommand**

## Implements

* [ICommand](../interfaces/_interfaces_icommand_.icommand.md)

## Index

### Constructors

* [constructor](_commands_examplecommand_.testcommand.md#constructor)

### Properties

* [AllowedChannels](_commands_examplecommand_.testcommand.md#allowedchannels)
* [AllowedRoles](_commands_examplecommand_.testcommand.md#allowedroles)
* [AllowedUsers](_commands_examplecommand_.testcommand.md#allowedusers)
* [Data](_commands_examplecommand_.testcommand.md#data)
* [RequiresDatabase](_commands_examplecommand_.testcommand.md#requiresdatabase)
* [Signature](_commands_examplecommand_.testcommand.md#signature)
* [NAME](_commands_examplecommand_.testcommand.md#name)
* [TEST_OUTPUT](_commands_examplecommand_.testcommand.md#test_output)

### Accessors

* [HasLocalData](_commands_examplecommand_.testcommand.md#haslocaldata)
* [LocalData](_commands_examplecommand_.testcommand.md#localdata)

### Methods

* [AddAllowedChannel](_commands_examplecommand_.testcommand.md#addallowedchannel)
* [AddAllowedRole](_commands_examplecommand_.testcommand.md#addallowedrole)
* [AddAllowedUser](_commands_examplecommand_.testcommand.md#addalloweduser)
* [Call](_commands_examplecommand_.testcommand.md#call)
* [GetContext](_commands_examplecommand_.testcommand.md#getcontext)
* [Name](_commands_examplecommand_.testcommand.md#name-1)
* [Namespace](_commands_examplecommand_.testcommand.md#namespace)
* [RemoveAllowedChannel](_commands_examplecommand_.testcommand.md#removeallowedchannel)
* [RemoveAllowedRole](_commands_examplecommand_.testcommand.md#removeallowedrole)
* [RemoveAllowedUsers](_commands_examplecommand_.testcommand.md#removeallowedusers)
* [Run](_commands_examplecommand_.testcommand.md#run)
* [Save](_commands_examplecommand_.testcommand.md#save)
* [ValidateChannel](_commands_examplecommand_.testcommand.md#validatechannel)
* [ValidateRoles](_commands_examplecommand_.testcommand.md#validateroles)
* [ValidateUsers](_commands_examplecommand_.testcommand.md#validateusers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TestCommand**(channels: *`string`[]*, roles: *`string`[]*, users: *`string`[]*, dbRequired?: *`boolean`*): [TestCommand](_commands_examplecommand_.testcommand.md)

*Inherited from [Command](_abstractions_command_.command.md).[constructor](_abstractions_command_.command.md#constructor)*

*Defined in [Abstractions/Command.ts:17](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| channels | `string`[] | - |
| roles | `string`[] | - |
| users | `string`[] | - |
| `Default value` dbRequired | `boolean` | false |

**Returns:** [TestCommand](_commands_examplecommand_.testcommand.md)

___

## Properties

<a id="allowedchannels"></a>

###  AllowedChannels

**● AllowedChannels**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedChannels](../interfaces/_interfaces_icommand_.icommand.md#allowedchannels)*

*Inherited from [Command](_abstractions_command_.command.md).[AllowedChannels](_abstractions_command_.command.md#allowedchannels)*

*Defined in [Abstractions/Command.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L11)*

___
<a id="allowedroles"></a>

###  AllowedRoles

**● AllowedRoles**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedRoles](../interfaces/_interfaces_icommand_.icommand.md#allowedroles)*

*Inherited from [Command](_abstractions_command_.command.md).[AllowedRoles](_abstractions_command_.command.md#allowedroles)*

*Defined in [Abstractions/Command.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L12)*

___
<a id="allowedusers"></a>

###  AllowedUsers

**● AllowedUsers**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedUsers](../interfaces/_interfaces_icommand_.icommand.md#allowedusers)*

*Inherited from [Command](_abstractions_command_.command.md).[AllowedUsers](_abstractions_command_.command.md#allowedusers)*

*Defined in [Abstractions/Command.ts:13](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L13)*

___
<a id="data"></a>

###  Data

**● Data**: *`any`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[Data](../interfaces/_interfaces_icommand_.icommand.md#data)*

*Inherited from [Command](_abstractions_command_.command.md).[Data](_abstractions_command_.command.md#data)*

*Defined in [Abstractions/Command.ts:14](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L14)*

___
<a id="requiresdatabase"></a>

###  RequiresDatabase

**● RequiresDatabase**: *`boolean`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[RequiresDatabase](../interfaces/_interfaces_icommand_.icommand.md#requiresdatabase)*

*Inherited from [Command](_abstractions_command_.command.md).[RequiresDatabase](_abstractions_command_.command.md#requiresdatabase)*

*Defined in [Abstractions/Command.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L15)*

___
<a id="signature"></a>

###  Signature

**● Signature**: *`string`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[Signature](../interfaces/_interfaces_icommand_.icommand.md#signature)*

*Inherited from [Command](_abstractions_command_.command.md).[Signature](_abstractions_command_.command.md#signature)*

*Defined in [Abstractions/Command.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L16)*

___
<a id="name"></a>

### `<Static>` NAME

**● NAME**: *`string`* = "TestCommand"

*Defined in [Commands/ExampleCommand.ts:9](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Commands/ExampleCommand.ts#L9)*

___
<a id="test_output"></a>

### `<Static>` TEST_OUTPUT

**● TEST_OUTPUT**: *`string`* = "ACCESSED SUCCESSFULLY"

*Defined in [Commands/ExampleCommand.ts:10](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Commands/ExampleCommand.ts#L10)*

___

## Accessors

<a id="haslocaldata"></a>

###  HasLocalData

getHasLocalData(): `boolean`

*Inherited from [Command](_abstractions_command_.command.md).[HasLocalData](_abstractions_command_.command.md#haslocaldata)*

*Defined in [Abstractions/Command.ts:36](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L36)*

**Returns:** `boolean`

___
<a id="localdata"></a>

###  LocalData

getLocalData(): `any`setLocalData(value: *`any`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[LocalData](_abstractions_command_.command.md#localdata)*

*Defined in [Abstractions/Command.ts:28](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L28)*

**Returns:** `any`

*Inherited from [Command](_abstractions_command_.command.md).[LocalData](_abstractions_command_.command.md#localdata)*

*Defined in [Abstractions/Command.ts:32](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `void`

___

## Methods

<a id="addallowedchannel"></a>

###  AddAllowedChannel

▸ **AddAllowedChannel**(channelId: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[AddAllowedChannel](_abstractions_command_.command.md#addallowedchannel)*

*Defined in [Abstractions/Command.ts:98](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L98)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| channelId | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="addallowedrole"></a>

###  AddAllowedRole

▸ **AddAllowedRole**(roleId: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[AddAllowedRole](_abstractions_command_.command.md#addallowedrole)*

*Defined in [Abstractions/Command.ts:102](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L102)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| roleId | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="addalloweduser"></a>

###  AddAllowedUser

▸ **AddAllowedUser**(user: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[AddAllowedUser](_abstractions_command_.command.md#addalloweduser)*

*Defined in [Abstractions/Command.ts:106](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L106)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| user | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="call"></a>

###  Call

▸ **Call**(message: *`Message`*): `Promise`<`any`>

*Inherited from [Command](_abstractions_command_.command.md).[Call](_abstractions_command_.command.md#call)*

*Defined in [Abstractions/Command.ts:110](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L110)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="getcontext"></a>

###  GetContext

▸ **GetContext**(message: *`Message`*): `any`

*Inherited from [Command](_abstractions_command_.command.md).[GetContext](_abstractions_command_.command.md#getcontext)*

*Defined in [Abstractions/Command.ts:123](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `any`

___
<a id="name-1"></a>

###  Name

▸ **Name**(): `string`

*Overrides [Command](_abstractions_command_.command.md).[Name](_abstractions_command_.command.md#name)*

*Defined in [Commands/ExampleCommand.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Commands/ExampleCommand.ts#L12)*

**Returns:** `string`

___
<a id="namespace"></a>

###  Namespace

▸ **Namespace**(): `string`

*Overrides [Command](_abstractions_command_.command.md).[Namespace](_abstractions_command_.command.md#namespace)*

*Defined in [Commands/ExampleCommand.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Commands/ExampleCommand.ts#L15)*

**Returns:** `string`

___
<a id="removeallowedchannel"></a>

###  RemoveAllowedChannel

▸ **RemoveAllowedChannel**(channelId: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[RemoveAllowedChannel](_abstractions_command_.command.md#removeallowedchannel)*

*Defined in [Abstractions/Command.ts:147](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L147)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| channelId | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="removeallowedrole"></a>

###  RemoveAllowedRole

▸ **RemoveAllowedRole**(roleId: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[RemoveAllowedRole](_abstractions_command_.command.md#removeallowedrole)*

*Defined in [Abstractions/Command.ts:151](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L151)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| roleId | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="removeallowedusers"></a>

###  RemoveAllowedUsers

▸ **RemoveAllowedUsers**(user: *`string`*, local?: *`boolean`*): `void`

*Inherited from [Command](_abstractions_command_.command.md).[RemoveAllowedUsers](_abstractions_command_.command.md#removeallowedusers)*

*Defined in [Abstractions/Command.ts:155](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L155)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| user | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="run"></a>

###  Run

▸ **Run**(message: *`Message`*): `Promise`<`any`>

*Overrides [Command](_abstractions_command_.command.md).[Run](_abstractions_command_.command.md#run)*

*Defined in [Commands/ExampleCommand.ts:19](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Commands/ExampleCommand.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="save"></a>

###  Save

▸ **Save**(): `Promise`<`any`>

*Inherited from [Command](_abstractions_command_.command.md).[Save](_abstractions_command_.command.md#save)*

*Defined in [Abstractions/Command.ts:159](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L159)*

**Returns:** `Promise`<`any`>

___
<a id="validatechannel"></a>

### `<Protected>` ValidateChannel

▸ **ValidateChannel**(channelId: *`string`*): `boolean`

*Inherited from [Command](_abstractions_command_.command.md).[ValidateChannel](_abstractions_command_.command.md#validatechannel)*

*Defined in [Abstractions/Command.ts:48](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| channelId | `string` |

**Returns:** `boolean`

___
<a id="validateroles"></a>

### `<Protected>` ValidateRoles

▸ **ValidateRoles**(roles: *`Collection`<`any`, `any`>*): `boolean`

*Inherited from [Command](_abstractions_command_.command.md).[ValidateRoles](_abstractions_command_.command.md#validateroles)*

*Defined in [Abstractions/Command.ts:54](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| roles | `Collection`<`any`, `any`> |

**Returns:** `boolean`

___
<a id="validateusers"></a>

### `<Protected>` ValidateUsers

▸ **ValidateUsers**(user: *`string`*): `boolean`

*Inherited from [Command](_abstractions_command_.command.md).[ValidateUsers](_abstractions_command_.command.md#validateusers)*

*Defined in [Abstractions/Command.ts:60](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| user | `string` |

**Returns:** `boolean`

___

