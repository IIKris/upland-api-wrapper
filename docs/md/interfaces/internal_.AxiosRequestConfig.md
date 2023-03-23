[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig<D\>

[<internal>](../modules/internal_.md).AxiosRequestConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- **`AxiosRequestConfig`**

  ↳ [`InternalAxiosRequestConfig`](internal_.InternalAxiosRequestConfig.md)

## Table of contents

### Properties

- [adapter](internal_.AxiosRequestConfig.md#adapter)
- [auth](internal_.AxiosRequestConfig.md#auth)
- [baseURL](internal_.AxiosRequestConfig.md#baseurl)
- [beforeRedirect](internal_.AxiosRequestConfig.md#beforeredirect)
- [cancelToken](internal_.AxiosRequestConfig.md#canceltoken)
- [data](internal_.AxiosRequestConfig.md#data)
- [decompress](internal_.AxiosRequestConfig.md#decompress)
- [env](internal_.AxiosRequestConfig.md#env)
- [formSerializer](internal_.AxiosRequestConfig.md#formserializer)
- [headers](internal_.AxiosRequestConfig.md#headers)
- [httpAgent](internal_.AxiosRequestConfig.md#httpagent)
- [httpsAgent](internal_.AxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](internal_.AxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](internal_.AxiosRequestConfig.md#maxbodylength)
- [maxContentLength](internal_.AxiosRequestConfig.md#maxcontentlength)
- [maxRate](internal_.AxiosRequestConfig.md#maxrate)
- [maxRedirects](internal_.AxiosRequestConfig.md#maxredirects)
- [method](internal_.AxiosRequestConfig.md#method)
- [onDownloadProgress](internal_.AxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](internal_.AxiosRequestConfig.md#onuploadprogress)
- [params](internal_.AxiosRequestConfig.md#params)
- [paramsSerializer](internal_.AxiosRequestConfig.md#paramsserializer)
- [proxy](internal_.AxiosRequestConfig.md#proxy)
- [responseEncoding](internal_.AxiosRequestConfig.md#responseencoding)
- [responseType](internal_.AxiosRequestConfig.md#responsetype)
- [signal](internal_.AxiosRequestConfig.md#signal)
- [socketPath](internal_.AxiosRequestConfig.md#socketpath)
- [timeout](internal_.AxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](internal_.AxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](internal_.AxiosRequestConfig.md#transformrequest)
- [transformResponse](internal_.AxiosRequestConfig.md#transformresponse)
- [transitional](internal_.AxiosRequestConfig.md#transitional)
- [url](internal_.AxiosRequestConfig.md#url)
- [validateStatus](internal_.AxiosRequestConfig.md#validatestatus)
- [withCredentials](internal_.AxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](internal_.AxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](internal_.AxiosRequestConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapterConfig`](../modules/internal_.md#axiosadapterconfig) \| [`AxiosAdapterConfig`](../modules/internal_.md#axiosadapterconfig)[]

#### Defined in

node_modules/axios/index.d.cts:378

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.cts:379

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

node_modules/axios/index.d.cts:368

___

### beforeRedirect

• `Optional` **beforeRedirect**: (`options`: [`Record`](../modules/internal_.md#record)<`string`, `any`\>, `responseDetails`: { `headers`: [`Record`](../modules/internal_.md#record)<`string`, `string`\>  }) => `void`

#### Type declaration

▸ (`options`, `responseDetails`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Record`](../modules/internal_.md#record)<`string`, `any`\> |
| `responseDetails` | `Object` |
| `responseDetails.headers` | [`Record`](../modules/internal_.md#record)<`string`, `string`\> |

##### Returns

`void`

#### Defined in

node_modules/axios/index.d.cts:391

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Defined in

node_modules/axios/index.d.cts:396

___

### data

• `Optional` **data**: `D`

#### Defined in

node_modules/axios/index.d.cts:374

___

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.cts:397

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Defined in

node_modules/axios/index.d.cts:401

___

### formSerializer

• `Optional` **formSerializer**: [`FormSerializerOptions`](internal_.FormSerializerOptions.md)

#### Defined in

node_modules/axios/index.d.cts:404

___

### headers

• `Optional` **headers**: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) \| [`Partial`](../modules/internal_.md#partial)<[`RawAxiosHeaders`](internal_.RawAxiosHeaders.md) & { `Accept`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Authorization`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Content-Encoding`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `Content-Length`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) ; `User-Agent`: [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)  } & { `Content-Type`: [`ContentType`](../modules/internal_.md#contenttype)  }\> & [`Partial`](../modules/internal_.md#partial)<{ `delete`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `get`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `head`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `link`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `options`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `patch`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `post`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `purge`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `put`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md) ; `unlink`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md)  } & { `common`: [`AxiosHeaders`](../classes/internal_.AxiosHeaders.md)  }\>

#### Defined in

node_modules/axios/index.d.cts:371

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.cts:393

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.cts:394

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Defined in

node_modules/axios/index.d.cts:400

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.cts:388

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.cts:386

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Defined in

node_modules/axios/index.d.cts:390

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.cts:389

___

### method

• `Optional` **method**: `string`

#### Defined in

node_modules/axios/index.d.cts:367

___

### onDownloadProgress

• `Optional` **onDownloadProgress**: (`progressEvent`: [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md)) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md) |

##### Returns

`void`

#### Defined in

node_modules/axios/index.d.cts:385

___

### onUploadProgress

• `Optional` **onUploadProgress**: (`progressEvent`: [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md)) => `void`

#### Type declaration

▸ (`progressEvent`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | [`AxiosProgressEvent`](internal_.AxiosProgressEvent.md) |

##### Returns

`void`

#### Defined in

node_modules/axios/index.d.cts:384

___

### params

• `Optional` **params**: `any`

#### Defined in

node_modules/axios/index.d.cts:372

___

### paramsSerializer

• `Optional` **paramsSerializer**: [`ParamsSerializerOptions`](internal_.ParamsSerializerOptions.md)

#### Defined in

node_modules/axios/index.d.cts:373

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.cts:395

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Defined in

node_modules/axios/index.d.cts:381

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype)

#### Defined in

node_modules/axios/index.d.cts:380

___

### signal

• `Optional` **signal**: [`GenericAbortSignal`](internal_.GenericAbortSignal.md)

#### Defined in

node_modules/axios/index.d.cts:399

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Defined in

node_modules/axios/index.d.cts:392

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.cts:375

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.cts:376

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Defined in

node_modules/axios/index.d.cts:369

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Defined in

node_modules/axios/index.d.cts:370

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.cts:398

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.cts:366

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.cts:387

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.cts:377

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.cts:382

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Defined in

node_modules/axios/index.d.cts:383
