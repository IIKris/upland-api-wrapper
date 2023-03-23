[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EscrowContainer

# Class: EscrowContainer

[<internal>](../modules/internal_.md).EscrowContainer

## Table of contents

### Constructors

- [constructor](internal_.EscrowContainer.md#constructor)

### Properties

- [\_container](internal_.EscrowContainer.md#_container)
- [\_escrowAxiosInstance](internal_.EscrowContainer.md#_escrowaxiosinstance)

### Methods

- [deleteTransaction](internal_.EscrowContainer.md#deletetransaction)
- [getDevShopId](internal_.EscrowContainer.md#getdevshopid)
- [getId](internal_.EscrowContainer.md#getid)
- [getInformation](internal_.EscrowContainer.md#getinformation)
- [lock](internal_.EscrowContainer.md#lock)
- [refreshExpirationTime](internal_.EscrowContainer.md#refreshexpirationtime)
- [refund](internal_.EscrowContainer.md#refund)
- [resolve](internal_.EscrowContainer.md#resolve)

## Constructors

### constructor

• **new EscrowContainer**(`_axiosInstance`, `container`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_axiosInstance` | [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md) | The axios instance to use for the API calls. |
| `container` | [`IEscrowContainer`](../interfaces/internal_.IEscrowContainer.md) | - |

#### Defined in

src/developer/escrow/index.ts:15

## Properties

### \_container

• `Private` **\_container**: [`IEscrowContainer`](../interfaces/internal_.IEscrowContainer.md)

#### Defined in

src/developer/escrow/index.ts:8

___

### \_escrowAxiosInstance

• `Private` `Readonly` **\_escrowAxiosInstance**: [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md)

#### Defined in

src/developer/escrow/index.ts:7

## Methods

### deleteTransaction

▸ **deleteTransaction**(`transactionId`): `Promise`<`void`\>

Removes a transaction that has not been signed by the user from container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transactionId` | `string` | The ID of the transaction to delete. |

#### Returns

`Promise`<`void`\>

#### Defined in

src/developer/escrow/index.ts:107

___

### getDevShopId

▸ **getDevShopId**(): ``null`` \| `string`

Get the developer shop ID of the container.

#### Returns

``null`` \| `string`

The developer shop ID of the container.

#### Defined in

src/developer/escrow/index.ts:34

___

### getId

▸ **getId**(): `number`

Get the ID of the container.

#### Returns

`number`

The ID of the container.

#### Defined in

src/developer/escrow/index.ts:25

___

### getInformation

▸ **getInformation**(): `Promise`<[`IEscrowContainer`](../interfaces/internal_.IEscrowContainer.md)\>

Method to update the container information and return the updated information.

#### Returns

`Promise`<[`IEscrowContainer`](../interfaces/internal_.IEscrowContainer.md)\>

A Promise that resolves to an object containing the container information.

#### Defined in

src/developer/escrow/index.ts:43

___

### lock

▸ **lock**(): `Promise`<`void`\>

Method to lock the container and prevent any further changes.

#### Returns

`Promise`<`void`\>

#### Defined in

src/developer/escrow/index.ts:118

___

### refreshExpirationTime

▸ **refreshExpirationTime**(): `Promise`<`void`\>

Method to refresh the expiration time of the container.

#### Returns

`Promise`<`void`\>

#### Defined in

src/developer/escrow/index.ts:129

___

### refund

▸ **refund**(): `Promise`<{ `transactionId`: `string`  }\>

It sends back the assets inside the container to the original owners (no fees) and resolves the container.

#### Returns

`Promise`<{ `transactionId`: `string`  }\>

A Promise that resolves to an object containing the transaction ID.

#### Defined in

src/developer/escrow/index.ts:58

___

### resolve

▸ **resolve**(`resolveActions`): `Promise`<{ `transactionId`: `string`  }\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolveActions` | [`ResolveActions`](../interfaces/internal_.ResolveActions.md)[] | the resolve actions to perform. |

#### Returns

`Promise`<{ `transactionId`: `string`  }\>

A Promise that resolves to an object containing the transaction ID.

#### Defined in

src/developer/escrow/index.ts:78
