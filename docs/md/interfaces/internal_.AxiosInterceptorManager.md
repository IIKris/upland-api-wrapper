[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosInterceptorManager

# Interface: AxiosInterceptorManager<V\>

[<internal>](../modules/internal_.md).AxiosInterceptorManager

## Type parameters

| Name |
| :------ |
| `V` |

## Table of contents

### Methods

- [clear](internal_.AxiosInterceptorManager.md#clear)
- [eject](internal_.AxiosInterceptorManager.md#eject)
- [use](internal_.AxiosInterceptorManager.md#use)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.cts:483

___

### eject

▸ **eject**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.cts:482

___

### use

▸ **use**(`onFulfilled?`, `onRejected?`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | (`value`: `V`) => `V` \| `Promise`<`V`\> |
| `onRejected?` | (`error`: `any`) => `any` |
| `options?` | [`AxiosInterceptorOptions`](internal_.AxiosInterceptorOptions.md) |

#### Returns

`number`

#### Defined in

node_modules/axios/index.d.cts:481
