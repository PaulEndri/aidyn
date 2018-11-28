[Aidyn](../README.md) > ["Database/Models/Users"](../modules/_database_models_users_.md)

# External module: "Database/Models/Users"

## Index

### Interfaces

* [IUsersModel](../interfaces/_database_models_users_.iusersmodel.md)

### Variables

* [Types](_database_models_users_.md#types)
* [Users](_database_models_users_.md#users)
* [UsersSchema](_database_models_users_.md#usersschema)

---

## Variables

<a id="types"></a>

###  Types

**● Types**: *`Types`*

*Defined in [Database/Models/Users.ts:4](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Users.ts#L4)*

___
<a id="users"></a>

### `<Const>` Users

**● Users**: *`Model`<[IUsersModel](../interfaces/_database_models_users_.iusersmodel.md)>* =  model<IUsersModel>("Users", UsersSchema)

*Defined in [Database/Models/Users.ts:25](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Users.ts#L25)*

___
<a id="usersschema"></a>

### `<Const>` UsersSchema

**● UsersSchema**: *`Schema`* =  new Schema({
    CreatedAt : Types.Date,
    Name      : Types.String,
    Roles     : [Types.String]
})

*Defined in [Database/Models/Users.ts:8](https://github.com/PaulEndri/aidyn/blob/a12a15f/src/Database/Models/Users.ts#L8)*

___

