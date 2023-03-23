[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / DeveloperAPI

# Class: DeveloperAPI

[<internal>](../modules/internal_.md).DeveloperAPI

DeveloperAPI is the main class for the Upland Developer API.

It is used to instantiate the API and access the various API endpoints.

**`Example`**

```ts
const devAPI = new DeveloperAPI(APPLICATION_ID, ACCESS_TOKEN, true)

// work with the generic API
const someData = await devAPI.generic.someMethod();

// work with the user API
const testUser = devAPI.getUser(USER_ACCESS_TOKEN);
const userInformation = await testUser.getProfile();

// work with the escrow API
// create a new container
const testContainer = await devAPI.createContainer();
const containerInformation = await testContainer.getInformation();

// get an existing container
const testContainer = devAPI.getContainer(CONTAINER_ID);
const containerInformation = await testContainer.getInformation();
```

## Table of contents

### Constructors

- [constructor](internal_.DeveloperAPI.md#constructor)

### Properties

- [\_axiosInstance](internal_.DeveloperAPI.md#_axiosinstance)
- [\_baseURL](internal_.DeveloperAPI.md#_baseurl)
- [generic](internal_.DeveloperAPI.md#generic)

### Methods

- [createContainer](internal_.DeveloperAPI.md#createcontainer)
- [generateAuthCode](internal_.DeveloperAPI.md#generateauthcode)
- [getContainer](internal_.DeveloperAPI.md#getcontainer)
- [getUser](internal_.DeveloperAPI.md#getuser)

## Constructors

### constructor

• **new DeveloperAPI**(`applicationID`, `accessToken`, `sandbox?`)

Returns an instance of the DeveloperAPI class.

**`Example`**

```ts
const devAPI = new DeveloperAPI(APPLICATION_ID, ACCESS_TOKEN, true)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `applicationID` | `number` | `undefined` | Your application ID. |
| `accessToken` | `string` | `undefined` | Your access token for the application. |
| `sandbox` | `boolean` | `true` | Whether or not to use the sandbox environment. |

#### Defined in

src/developer/index.ts:48

## Properties

### \_axiosInstance

• `Private` `Readonly` **\_axiosInstance**: [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md)

#### Defined in

src/developer/index.ts:33

___

### \_baseURL

• `Private` **\_baseURL**: `string`

#### Defined in

src/developer/index.ts:34

___

### generic

• `Readonly` **generic**: [`GenericAPI`](internal_.GenericAPI.md)

#### Defined in

src/developer/index.ts:35

## Methods

### createContainer

▸ **createContainer**(`devShopId?`): `Promise`<[`EscrowContainer`](internal_.EscrowContainer.md)\>

Create a new Container and get a new instance of the EscrowContainer class to interact with the escrow API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `devShopId?` | `string` | The developer shop ID. |

#### Returns

`Promise`<[`EscrowContainer`](internal_.EscrowContainer.md)\>

A Promise that resolves to an instance of the EscrowContainer class.

#### Defined in

src/developer/index.ts:91

___

### generateAuthCode

▸ **generateAuthCode**(): `Promise`<[`IAuthCode`](../interfaces/internal_.IAuthCode.md)\>

Get an auth code for a user to use to connect their Upland account to your application.

#### Returns

`Promise`<[`IAuthCode`](../interfaces/internal_.IAuthCode.md)\>

A Promise that resolves to an object containing the auth code and the expiration date.

#### Defined in

src/developer/index.ts:66

___

### getContainer

▸ **getContainer**(`containerId`): `Promise`<[`EscrowContainer`](internal_.EscrowContainer.md)\>

Get an existing container and get a new instance of the EscrowContainer class to interact with the escrow API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `containerId` | `string` |

#### Returns

`Promise`<[`EscrowContainer`](internal_.EscrowContainer.md)\>

A Promise that resolves to an instance of the EscrowContainer class.

#### Defined in

src/developer/index.ts:112

___

### getUser

▸ **getUser**(`accessToken`): [`UplandUser`](internal_.UplandUser.md)

Create a new instance of the UplandUser class to interact with the user API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |

#### Returns

[`UplandUser`](internal_.UplandUser.md)

Instance of the UplandUser class.

#### Defined in

src/developer/index.ts:81
