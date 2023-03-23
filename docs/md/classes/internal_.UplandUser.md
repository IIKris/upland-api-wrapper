[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UplandUser

# Class: UplandUser

[<internal>](../modules/internal_.md).UplandUser

**`Name`**

UplandUser

**`Description`**

This class is used to manage the user API.

**`Example`**

```ts
const devAPI = new DeveloperAPI(param1, param2, param3);
const testUser = devAPI.createUser('USER-TOKEN-HERE');
```

## Table of contents

### Constructors

- [constructor](internal_.UplandUser.md#constructor)

### Properties

- [\_baseURL](internal_.UplandUser.md#_baseurl)
- [\_userAxiosInstance](internal_.UplandUser.md#_useraxiosinstance)

### Methods

- [getBalances](internal_.UplandUser.md#getbalances)
- [getNftAssets](internal_.UplandUser.md#getnftassets)
- [getProfile](internal_.UplandUser.md#getprofile)
- [getProperties](internal_.UplandUser.md#getproperties)
- [getTravels](internal_.UplandUser.md#gettravels)
- [putAssetsInEscrow](internal_.UplandUser.md#putassetsinescrow)

## Constructors

### constructor

• **new UplandUser**(`baseURL`, `accessToken`)

Creates an instance of UplandUser.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseURL` | `string` | The base URL for the API. |
| `accessToken` | `string` | The access token for the user. |

#### Defined in

src/developer/user/index.ts:25

## Properties

### \_baseURL

• `Private` **\_baseURL**: `string`

#### Defined in

src/developer/user/index.ts:17

___

### \_userAxiosInstance

• `Private` `Readonly` **\_userAxiosInstance**: [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md)

#### Defined in

src/developer/user/index.ts:16

## Methods

### getBalances

▸ **getBalances**(): `Promise`<[`IUserBalances`](../interfaces/internal_.IUserBalances.md)\>

Gets the user balances.

#### Returns

`Promise`<[`IUserBalances`](../interfaces/internal_.IUserBalances.md)\>

The user balances (upx, spark, sends).

#### Defined in

src/developer/user/index.ts:55

___

### getNftAssets

▸ **getNftAssets**(`options?`): `Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IUserNftAssets`](../interfaces/internal_.IUserNftAssets.md)\>\>

Get the nft assets of the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetNftAssetsOptions`](../interfaces/internal_.GetNftAssetsOptions.md) | The options for fetching the NFT assets. |

#### Returns

`Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IUserNftAssets`](../interfaces/internal_.IUserNftAssets.md)\>\>

The paginated result of the NFT assets.

#### Defined in

src/developer/user/index.ts:75

___

### getProfile

▸ **getProfile**(): `Promise`<[`IUserProfile`](../interfaces/internal_.IUserProfile.md)\>

Get the user profile.

#### Returns

`Promise`<[`IUserProfile`](../interfaces/internal_.IUserProfile.md)\>

The user profile.

#### Defined in

src/developer/user/index.ts:41

___

### getProperties

▸ **getProperties**(`options?`): `Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IProperties`](../interfaces/internal_.IProperties-1.md)\>\>

Function to get properties for a given city.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetPropertiesOptions`](../interfaces/internal_.GetPropertiesOptions-1.md) | The options for fetching properties. |

#### Returns

`Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IProperties`](../interfaces/internal_.IProperties-1.md)\>\>

- A Promise resolving to an object containing an array of properties under data and a function to get the next page of results under next().

#### Defined in

src/developer/user/index.ts:114

___

### getTravels

▸ **getTravels**(`options?`): `Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`ITravel`](../interfaces/internal_.ITravel.md)\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetTravelOptions`](../interfaces/internal_.GetTravelOptions.md) | The options for fetching travels of a user. |

#### Returns

`Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`ITravel`](../interfaces/internal_.ITravel.md)\>\>

The paginated result of the travels.

#### Defined in

src/developer/user/index.ts:143

___

### putAssetsInEscrow

▸ **putAssetsInEscrow**(`options`): `Promise`<{ `transactionId`: `string`  }\>

Function to put assets in escrow for a user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PutInEscrowOptions`](../interfaces/internal_.PutInEscrowOptions.md) | The options for putting assets in escrow. |

#### Returns

`Promise`<{ `transactionId`: `string`  }\>

The transaction ID.

#### Defined in

src/developer/user/index.ts:170
