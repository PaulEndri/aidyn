[Aidyn](../README.md) > ["Database/Models/Commands"](../modules/_database_models_commands_.md) > [ICommandsModel](../interfaces/_database_models_commands_.icommandsmodel.md)

# Interface: ICommandsModel

## Hierarchy

 [ICommands](_interfaces_database_icommands_.icommands.md)

 `Document`

**↳ ICommandsModel**

## Index

### Properties

* [AllowedChannels](_database_models_commands_.icommandsmodel.md#allowedchannels)
* [AllowedRoles](_database_models_commands_.icommandsmodel.md#allowedroles)
* [AllowedUsers](_database_models_commands_.icommandsmodel.md#allowedusers)
* [Data](_database_models_commands_.icommandsmodel.md#data)
* [Namespace](_database_models_commands_.icommandsmodel.md#namespace)
* [__v](_database_models_commands_.icommandsmodel.md#__v)
* [base](_database_models_commands_.icommandsmodel.md#base)
* [baseModelName](_database_models_commands_.icommandsmodel.md#basemodelname)
* [collection](_database_models_commands_.icommandsmodel.md#collection)
* [db](_database_models_commands_.icommandsmodel.md#db)
* [discriminators](_database_models_commands_.icommandsmodel.md#discriminators)
* [id](_database_models_commands_.icommandsmodel.md#id)
* [modelName](_database_models_commands_.icommandsmodel.md#modelname)
* [schema](_database_models_commands_.icommandsmodel.md#schema)

### Methods

* [addListener](_database_models_commands_.icommandsmodel.md#addlistener)
* [emit](_database_models_commands_.icommandsmodel.md#emit)
* [eventNames](_database_models_commands_.icommandsmodel.md#eventnames)
* [getMaxListeners](_database_models_commands_.icommandsmodel.md#getmaxlisteners)
* [increment](_database_models_commands_.icommandsmodel.md#increment)
* [isDeleted](_database_models_commands_.icommandsmodel.md#isdeleted)
* [listenerCount](_database_models_commands_.icommandsmodel.md#listenercount)
* [listeners](_database_models_commands_.icommandsmodel.md#listeners)
* [model](_database_models_commands_.icommandsmodel.md#model)
* [off](_database_models_commands_.icommandsmodel.md#off)
* [on](_database_models_commands_.icommandsmodel.md#on)
* [once](_database_models_commands_.icommandsmodel.md#once)
* [prependListener](_database_models_commands_.icommandsmodel.md#prependlistener)
* [prependOnceListener](_database_models_commands_.icommandsmodel.md#prependoncelistener)
* [rawListeners](_database_models_commands_.icommandsmodel.md#rawlisteners)
* [remove](_database_models_commands_.icommandsmodel.md#remove)
* [removeAllListeners](_database_models_commands_.icommandsmodel.md#removealllisteners)
* [removeListener](_database_models_commands_.icommandsmodel.md#removelistener)
* [save](_database_models_commands_.icommandsmodel.md#save)
* [setMaxListeners](_database_models_commands_.icommandsmodel.md#setmaxlisteners)

---

## Properties

<a id="allowedchannels"></a>

### `<Optional>` AllowedChannels

**● AllowedChannels**: *`string`[]*

*Inherited from [ICommands](_interfaces_database_icommands_.icommands.md).[AllowedChannels](_interfaces_database_icommands_.icommands.md#allowedchannels)*

*Defined in [Interfaces/Database/ICommands.ts:15](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/Database/ICommands.ts#L15)*

___
<a id="allowedroles"></a>

### `<Optional>` AllowedRoles

**● AllowedRoles**: *`string`[]*

*Inherited from [ICommands](_interfaces_database_icommands_.icommands.md).[AllowedRoles](_interfaces_database_icommands_.icommands.md#allowedroles)*

*Defined in [Interfaces/Database/ICommands.ts:14](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/Database/ICommands.ts#L14)*

___
<a id="allowedusers"></a>

### `<Optional>` AllowedUsers

**● AllowedUsers**: *`string`[]*

*Inherited from [ICommands](_interfaces_database_icommands_.icommands.md).[AllowedUsers](_interfaces_database_icommands_.icommands.md#allowedusers)*

*Defined in [Interfaces/Database/ICommands.ts:13](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/Database/ICommands.ts#L13)*

___
<a id="data"></a>

### `<Optional>` Data

**● Data**: *[Data](_interfaces_database_icommands_.data.md)*

*Inherited from [ICommands](_interfaces_database_icommands_.icommands.md).[Data](_interfaces_database_icommands_.icommands.md#data)*

*Defined in [Interfaces/Database/ICommands.ts:16](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/Database/ICommands.ts#L16)*

___
<a id="namespace"></a>

### `<Optional>` Namespace

**● Namespace**: *`string`*

*Inherited from [ICommands](_interfaces_database_icommands_.icommands.md).[Namespace](_interfaces_database_icommands_.icommands.md#namespace)*

*Defined in [Interfaces/Database/ICommands.ts:17](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Interfaces/Database/ICommands.ts#L17)*

___
<a id="__v"></a>

### `<Optional>` __v

**● __v**: *`number`*

*Inherited from Document.__v*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3156*

Version using default version key. See [http://mongoosejs.com/docs/guide.html#versionKey](http://mongoosejs.com/docs/guide.html#versionKey) If you're using another key, you will have to access it using \[\]: doc\[\_myVersionKey\]

___
<a id="base"></a>

###  base

**● base**: *`&quot;mongoose&quot;`*

*Inherited from ModelProperties.base*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3177*

Base Mongoose instance the model uses.

___
<a id="basemodelname"></a>

###  baseModelName

**● baseModelName**: * `string` &#124; `undefined`
*

*Inherited from ModelProperties.baseModelName*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3183*

If this is a discriminator model, baseModelName is the name of the base model.

___
<a id="collection"></a>

###  collection

**● collection**: *`Collection`*

*Inherited from ModelProperties.collection*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3186*

Collection the model uses.

___
<a id="db"></a>

###  db

**● db**: *`Connection`*

*Inherited from ModelProperties.db*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3189*

Connection the model uses.

___
<a id="discriminators"></a>

###  discriminators

**● discriminators**: *`any`*

*Inherited from ModelProperties.discriminators*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3192*

Registered discriminators for this model.

___
<a id="id"></a>

### `<Optional>` id

**● id**: *`any`*

*Inherited from MongooseDocumentOptionals.id*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:1417*

Virtual getter that by default returns the document's \_id field cast to a string, or in the case of ObjectIds, its hexString. This id getter may be disabled by passing the option { id: false } at schema construction time. If disabled, id behaves like any other field on a document and can be assigned any value.

___
<a id="modelname"></a>

###  modelName

**● modelName**: *`string`*

*Inherited from ModelProperties.modelName*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3195*

The name of the model

___
<a id="schema"></a>

###  schema

**● schema**: *`Schema`*

*Inherited from ModelProperties.schema*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3198*

Schema the model uses.

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:597*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:607*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

*Inherited from EventEmitter.eventNames*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:612*

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:604*

**Returns:** `number`

___
<a id="increment"></a>

###  increment

▸ **increment**(): `this`

*Inherited from Document.increment*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3123*

Signal that we desire an increment of this documents version.

**Returns:** `this`

___
<a id="isdeleted"></a>

###  isDeleted

▸ **isDeleted**(isDeleted: *`boolean`*): `void`

▸ **isDeleted**(): `boolean`

*Inherited from Document.isDeleted*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3132*

Override whether mongoose thinks this doc is deleted or not

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDeleted | `boolean` |

**Returns:** `void`

*Inherited from Document.isDeleted*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3134*

whether mongoose thinks this doc is deleted.

**Returns:** `boolean`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:608*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:605*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="model"></a>

###  model

▸ **model**(name: *`string`*): `Model`<`this`>

*Inherited from Document.model*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3129*

Returns another Model instance.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  model name |

**Returns:** `Model`<`this`>

___
<a id="off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:601*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:598*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:599*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:610*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:611*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:606*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="remove"></a>

###  remove

▸ **remove**(fn?: *`function`*): `Promise`<`this`>

*Inherited from Document.remove*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3140*

Removes this document from the db.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` fn | `function` |  optional callback |

**Returns:** `Promise`<`this`>

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:602*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:600*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="save"></a>

###  save

▸ **save**(options?: *`SaveOptions`*, fn?: *`function`*): `Promise`<`this`>

▸ **save**(fn?: *`function`*): `Promise`<`this`>

*Inherited from Document.save*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3149*

Saves this document.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `SaveOptions` |  options optional options |
| `Optional` fn | `function` |  optional callback |

**Returns:** `Promise`<`this`>

*Inherited from Document.save*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/mongoose/index.d.ts:3150*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` fn | `function` |

**Returns:** `Promise`<`this`>

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Defined in /Users/jsedano/projects/aidyn/node_modules/@types/node/index.d.ts:603*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___

