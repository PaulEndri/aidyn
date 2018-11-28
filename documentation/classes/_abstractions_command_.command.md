[Aidyn](../README.md) > ["Abstractions/Command"](../modules/_abstractions_command_.md) > [Command](../classes/_abstractions_command_.command.md)

# Class: Command

## Hierarchy

**Command**

↳  [TestCommand](_commands_examplecommand_.testcommand.md)

## Implements

* [ICommand](../interfaces/_interfaces_icommand_.icommand.md)

## Index

### Constructors

* [constructor](_abstractions_command_.command.md#constructor)

### Properties

* [AllowedChannels](_abstractions_command_.command.md#allowedchannels)
* [AllowedRoles](_abstractions_command_.command.md#allowedroles)
* [AllowedUsers](_abstractions_command_.command.md#allowedusers)
* [Data](_abstractions_command_.command.md#data)
* [Modified](_abstractions_command_.command.md#modified)
* [RequiresDatabase](_abstractions_command_.command.md#requiresdatabase)
* [Signature](_abstractions_command_.command.md#signature)

### Accessors

* [HasLocalData](_abstractions_command_.command.md#haslocaldata)
* [LocalData](_abstractions_command_.command.md#localdata)

### Methods

* [AddAllowedChannel](_abstractions_command_.command.md#addallowedchannel)
* [AddAllowedRole](_abstractions_command_.command.md#addallowedrole)
* [AddAllowedUser](_abstractions_command_.command.md#addalloweduser)
* [Call](_abstractions_command_.command.md#call)
* [GetContext](_abstractions_command_.command.md#getcontext)
* [GetValidationPermission](_abstractions_command_.command.md#getvalidationpermission)
* [HasLocalField](_abstractions_command_.command.md#haslocalfield)
* [ModifyPermissions](_abstractions_command_.command.md#modifypermissions)
* [Name](_abstractions_command_.command.md#name)
* [Namespace](_abstractions_command_.command.md#namespace)
* [RemoveAllowedChannel](_abstractions_command_.command.md#removeallowedchannel)
* [RemoveAllowedRole](_abstractions_command_.command.md#removeallowedrole)
* [RemoveAllowedUsers](_abstractions_command_.command.md#removeallowedusers)
* [Run](_abstractions_command_.command.md#run)
* [Save](_abstractions_command_.command.md#save)
* [ValidateChannel](_abstractions_command_.command.md#validatechannel)
* [ValidateRoles](_abstractions_command_.command.md#validateroles)
* [ValidateUsers](_abstractions_command_.command.md#validateusers)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Command**(channels: *`string`[]*, roles: *`string`[]*, users: *`string`[]*, dbRequired?: *`boolean`*): [Command](_abstractions_command_.command.md)

*Defined in [Abstractions/Command.ts:17](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L17)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| channels | `string`[] | - |
| roles | `string`[] | - |
| users | `string`[] | - |
| `Default value` dbRequired | `boolean` | false |

**Returns:** [Command](_abstractions_command_.command.md)

___

## Properties

<a id="allowedchannels"></a>

###  AllowedChannels

**● AllowedChannels**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedChannels](../interfaces/_interfaces_icommand_.icommand.md#allowedchannels)*

*Defined in [Abstractions/Command.ts:11](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L11)*

___
<a id="allowedroles"></a>

###  AllowedRoles

**● AllowedRoles**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedRoles](../interfaces/_interfaces_icommand_.icommand.md#allowedroles)*

*Defined in [Abstractions/Command.ts:12](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L12)*

___
<a id="allowedusers"></a>

###  AllowedUsers

**● AllowedUsers**: *`string`[]*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[AllowedUsers](../interfaces/_interfaces_icommand_.icommand.md#allowedusers)*

*Defined in [Abstractions/Command.ts:13](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L13)*

___
<a id="data"></a>

###  Data

**● Data**: *`any`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[Data](../interfaces/_interfaces_icommand_.icommand.md#data)*

*Defined in [Abstractions/Command.ts:14](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L14)*

___
<a id="modified"></a>

### `<Private>` Modified

**● Modified**: *`boolean`*

*Defined in [Abstractions/Command.ts:17](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L17)*

___
<a id="requiresdatabase"></a>

###  RequiresDatabase

**● RequiresDatabase**: *`boolean`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[RequiresDatabase](../interfaces/_interfaces_icommand_.icommand.md#requiresdatabase)*

*Defined in [Abstractions/Command.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L15)*

___
<a id="signature"></a>

###  Signature

**● Signature**: *`string`*

*Implementation of [ICommand](../interfaces/_interfaces_icommand_.icommand.md).[Signature](../interfaces/_interfaces_icommand_.icommand.md#signature)*

*Defined in [Abstractions/Command.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L16)*

___

## Accessors

<a id="haslocaldata"></a>

###  HasLocalData

getHasLocalData(): `boolean`

*Defined in [Abstractions/Command.ts:36](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L36)*

**Returns:** `boolean`

___
<a id="localdata"></a>

###  LocalData

getLocalData(): `any`setLocalData(value: *`any`*): `void`

*Defined in [Abstractions/Command.ts:28](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L28)*

**Returns:** `any`

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

*Defined in [Abstractions/Command.ts:123](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `any`

___
<a id="getvalidationpermission"></a>

### `<Private>` GetValidationPermission

▸ **GetValidationPermission**(type: *`string`*): `any`

*Defined in [Abstractions/Command.ts:66](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** `any`

___
<a id="haslocalfield"></a>

### `<Private>` HasLocalField

▸ **HasLocalField**(name: *`string`*): `boolean`

*Defined in [Abstractions/Command.ts:44](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="modifypermissions"></a>

### `<Private>` ModifyPermissions

▸ **ModifyPermissions**(type: *`string`*, action: *`string`*, key: *`string`*, local?: *`boolean`*): `void`

*Defined in [Abstractions/Command.ts:76](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L76)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| action | `string` | - |
| key | `string` | - |
| `Default value` local | `boolean` | false |

**Returns:** `void`

___
<a id="name"></a>

### `<Abstract>` Name

▸ **Name**(): `string`

*Defined in [Abstractions/Command.ts:41](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L41)*

**Returns:** `string`

___
<a id="namespace"></a>

### `<Abstract>` Namespace

▸ **Namespace**(): `string`

*Defined in [Abstractions/Command.ts:42](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L42)*

**Returns:** `string`

___
<a id="removeallowedchannel"></a>

###  RemoveAllowedChannel

▸ **RemoveAllowedChannel**(channelId: *`string`*, local?: *`boolean`*): `void`

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

*Defined in [Abstractions/Command.ts:155](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L155)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| user | `string` | - |
| `Default value` local | `boolean` | true |

**Returns:** `void`

___
<a id="run"></a>

### `<Abstract>` Run

▸ **Run**(message: *`Message`*): `Promise`<`any`>

*Defined in [Abstractions/Command.ts:40](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `Message` |

**Returns:** `Promise`<`any`>

___
<a id="save"></a>

###  Save

▸ **Save**(): `Promise`<`any`>

*Defined in [Abstractions/Command.ts:159](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L159)*

**Returns:** `Promise`<`any`>

___
<a id="validatechannel"></a>

### `<Protected>` ValidateChannel

▸ **ValidateChannel**(channelId: *`string`*): `boolean`

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

*Defined in [Abstractions/Command.ts:60](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Abstractions/Command.ts#L60)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| user | `string` |

**Returns:** `boolean`

___

