[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosResponse

# Interface: AxiosResponse<T, D\>

[<internal>](../modules/internal_.md).AxiosResponse

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `D` | `any` |

## Table of contents

### Properties

- [config](internal_.AxiosResponse.md#config)
- [data](internal_.AxiosResponse.md#data)
- [headers](internal_.AxiosResponse.md#headers)
- [request](internal_.AxiosResponse.md#request)
- [status](internal_.AxiosResponse.md#status)
- [statusText](internal_.AxiosResponse.md#statustext)

## Properties

### config

• **config**: [`InternalAxiosRequestConfig`](internal_.InternalAxiosRequestConfig.md)<`D`\>

#### Defined in

node_modules/axios/index.d.cts:441

___

### data

• **data**: `T`

#### Defined in

node_modules/axios/index.d.cts:437

___

### headers

• **headers**: [`Partial`](../modules/internal_.md#partial)<[`RawAxiosHeaders`](internal_.RawAxiosHeaders.md) & { `Cache-Control`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Content-Encoding`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Content-Length`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Content-Type`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Server`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)  } & { `set-cookie`: `string`[]  }\> \| [`AxiosResponseHeaders`](../modules/internal_.md#axiosresponseheaders)

#### Defined in

node_modules/axios/index.d.cts:440

___

### request

• `Optional` **request**: `any`

#### Defined in

node_modules/axios/index.d.cts:442

___

### status

• **status**: `number`

#### Defined in

node_modules/axios/index.d.cts:438

___

### statusText

• **statusText**: `string`

#### Defined in

node_modules/axios/index.d.cts:439
