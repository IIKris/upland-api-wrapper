[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InternalAxiosRequestConfig

# Interface: InternalAxiosRequestConfig<D\>

[<internal>](../modules/internal_.md).InternalAxiosRequestConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `any` |

## Hierarchy

- [`AxiosRequestConfig`](internal_.AxiosRequestConfig.md)

  ↳ **`InternalAxiosRequestConfig`**

## Table of contents

### Properties

- [adapter](internal_.InternalAxiosRequestConfig.md#adapter)
- [auth](internal_.InternalAxiosRequestConfig.md#auth)
- [baseURL](internal_.InternalAxiosRequestConfig.md#baseurl)
- [beforeRedirect](internal_.InternalAxiosRequestConfig.md#beforeredirect)
- [cancelToken](internal_.InternalAxiosRequestConfig.md#canceltoken)
- [data](internal_.InternalAxiosRequestConfig.md#data)
- [decompress](internal_.InternalAxiosRequestConfig.md#decompress)
- [env](internal_.InternalAxiosRequestConfig.md#env)
- [formSerializer](internal_.InternalAxiosRequestConfig.md#formserializer)
- [headers](internal_.InternalAxiosRequestConfig.md#headers)
- [httpAgent](internal_.InternalAxiosRequestConfig.md#httpagent)
- [httpsAgent](internal_.InternalAxiosRequestConfig.md#httpsagent)
- [insecureHTTPParser](internal_.InternalAxiosRequestConfig.md#insecurehttpparser)
- [maxBodyLength](internal_.InternalAxiosRequestConfig.md#maxbodylength)
- [maxContentLength](internal_.InternalAxiosRequestConfig.md#maxcontentlength)
- [maxRate](internal_.InternalAxiosRequestConfig.md#maxrate)
- [maxRedirects](internal_.InternalAxiosRequestConfig.md#maxredirects)
- [method](internal_.InternalAxiosRequestConfig.md#method)
- [onDownloadProgress](internal_.InternalAxiosRequestConfig.md#ondownloadprogress)
- [onUploadProgress](internal_.InternalAxiosRequestConfig.md#onuploadprogress)
- [params](internal_.InternalAxiosRequestConfig.md#params)
- [paramsSerializer](internal_.InternalAxiosRequestConfig.md#paramsserializer)
- [proxy](internal_.InternalAxiosRequestConfig.md#proxy)
- [responseEncoding](internal_.InternalAxiosRequestConfig.md#responseencoding)
- [responseType](internal_.InternalAxiosRequestConfig.md#responsetype)
- [signal](internal_.InternalAxiosRequestConfig.md#signal)
- [socketPath](internal_.InternalAxiosRequestConfig.md#socketpath)
- [timeout](internal_.InternalAxiosRequestConfig.md#timeout)
- [timeoutErrorMessage](internal_.InternalAxiosRequestConfig.md#timeouterrormessage)
- [transformRequest](internal_.InternalAxiosRequestConfig.md#transformrequest)
- [transformResponse](internal_.InternalAxiosRequestConfig.md#transformresponse)
- [transitional](internal_.InternalAxiosRequestConfig.md#transitional)
- [url](internal_.InternalAxiosRequestConfig.md#url)
- [validateStatus](internal_.InternalAxiosRequestConfig.md#validatestatus)
- [withCredentials](internal_.InternalAxiosRequestConfig.md#withcredentials)
- [xsrfCookieName](internal_.InternalAxiosRequestConfig.md#xsrfcookiename)
- [xsrfHeaderName](internal_.InternalAxiosRequestConfig.md#xsrfheadername)

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapterConfig`](../modules/internal_.md#axiosadapterconfig) \| [`AxiosAdapterConfig`](../modules/internal_.md#axiosadapterconfig)[]

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[adapter](internal_.AxiosRequestConfig.md#adapter)

#### Defined in

node_modules/axios/index.d.cts:378

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](internal_.AxiosBasicCredentials.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[auth](internal_.AxiosRequestConfig.md#auth)

#### Defined in

node_modules/axios/index.d.cts:379

___

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[baseURL](internal_.AxiosRequestConfig.md#baseurl)

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

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[beforeRedirect](internal_.AxiosRequestConfig.md#beforeredirect)

#### Defined in

node_modules/axios/index.d.cts:391

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](internal_.CancelToken.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[cancelToken](internal_.AxiosRequestConfig.md#canceltoken)

#### Defined in

node_modules/axios/index.d.cts:396

___

### data

• `Optional` **data**: `any`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[data](internal_.AxiosRequestConfig.md#data)

#### Defined in

node_modules/axios/index.d.cts:374

___

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[decompress](internal_.AxiosRequestConfig.md#decompress)

#### Defined in

node_modules/axios/index.d.cts:397

___

### env

• `Optional` **env**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FormData?` | (...`args`: `any`[]) => `object` |

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[env](internal_.AxiosRequestConfig.md#env)

#### Defined in

node_modules/axios/index.d.cts:401

___

### formSerializer

• `Optional` **formSerializer**: [`FormSerializerOptions`](internal_.FormSerializerOptions.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[formSerializer](internal_.AxiosRequestConfig.md#formserializer)

#### Defined in

node_modules/axios/index.d.cts:404

___

### headers

• **headers**: [`AxiosRequestHeaders`](../modules/internal_.md#axiosrequestheaders)

#### Overrides

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[headers](internal_.AxiosRequestConfig.md#headers)

#### Defined in

node_modules/axios/index.d.cts:411

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[httpAgent](internal_.AxiosRequestConfig.md#httpagent)

#### Defined in

node_modules/axios/index.d.cts:393

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[httpsAgent](internal_.AxiosRequestConfig.md#httpsagent)

#### Defined in

node_modules/axios/index.d.cts:394

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[insecureHTTPParser](internal_.AxiosRequestConfig.md#insecurehttpparser)

#### Defined in

node_modules/axios/index.d.cts:400

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[maxBodyLength](internal_.AxiosRequestConfig.md#maxbodylength)

#### Defined in

node_modules/axios/index.d.cts:388

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[maxContentLength](internal_.AxiosRequestConfig.md#maxcontentlength)

#### Defined in

node_modules/axios/index.d.cts:386

___

### maxRate

• `Optional` **maxRate**: `number` \| [`number`, `number`]

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[maxRate](internal_.AxiosRequestConfig.md#maxrate)

#### Defined in

node_modules/axios/index.d.cts:390

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[maxRedirects](internal_.AxiosRequestConfig.md#maxredirects)

#### Defined in

node_modules/axios/index.d.cts:389

___

### method

• `Optional` **method**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[method](internal_.AxiosRequestConfig.md#method)

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

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[onDownloadProgress](internal_.AxiosRequestConfig.md#ondownloadprogress)

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

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[onUploadProgress](internal_.AxiosRequestConfig.md#onuploadprogress)

#### Defined in

node_modules/axios/index.d.cts:384

___

### params

• `Optional` **params**: `any`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[params](internal_.AxiosRequestConfig.md#params)

#### Defined in

node_modules/axios/index.d.cts:372

___

### paramsSerializer

• `Optional` **paramsSerializer**: [`ParamsSerializerOptions`](internal_.ParamsSerializerOptions.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[paramsSerializer](internal_.AxiosRequestConfig.md#paramsserializer)

#### Defined in

node_modules/axios/index.d.cts:373

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](internal_.AxiosProxyConfig.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[proxy](internal_.AxiosRequestConfig.md#proxy)

#### Defined in

node_modules/axios/index.d.cts:395

___

### responseEncoding

• `Optional` **responseEncoding**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[responseEncoding](internal_.AxiosRequestConfig.md#responseencoding)

#### Defined in

node_modules/axios/index.d.cts:381

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules/internal_.md#responsetype)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[responseType](internal_.AxiosRequestConfig.md#responsetype)

#### Defined in

node_modules/axios/index.d.cts:380

___

### signal

• `Optional` **signal**: [`GenericAbortSignal`](internal_.GenericAbortSignal.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[signal](internal_.AxiosRequestConfig.md#signal)

#### Defined in

node_modules/axios/index.d.cts:399

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[socketPath](internal_.AxiosRequestConfig.md#socketpath)

#### Defined in

node_modules/axios/index.d.cts:392

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[timeout](internal_.AxiosRequestConfig.md#timeout)

#### Defined in

node_modules/axios/index.d.cts:375

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[timeoutErrorMessage](internal_.AxiosRequestConfig.md#timeouterrormessage)

#### Defined in

node_modules/axios/index.d.cts:376

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](internal_.AxiosRequestTransformer.md)[]

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[transformRequest](internal_.AxiosRequestConfig.md#transformrequest)

#### Defined in

node_modules/axios/index.d.cts:369

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](internal_.AxiosResponseTransformer.md)[]

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[transformResponse](internal_.AxiosRequestConfig.md#transformresponse)

#### Defined in

node_modules/axios/index.d.cts:370

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](internal_.TransitionalOptions.md)

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[transitional](internal_.AxiosRequestConfig.md#transitional)

#### Defined in

node_modules/axios/index.d.cts:398

___

### url

• `Optional` **url**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[url](internal_.AxiosRequestConfig.md#url)

#### Defined in

node_modules/axios/index.d.cts:366

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[validateStatus](internal_.AxiosRequestConfig.md#validatestatus)

#### Defined in

node_modules/axios/index.d.cts:387

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[withCredentials](internal_.AxiosRequestConfig.md#withcredentials)

#### Defined in

node_modules/axios/index.d.cts:377

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[xsrfCookieName](internal_.AxiosRequestConfig.md#xsrfcookiename)

#### Defined in

node_modules/axios/index.d.cts:382

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

[AxiosRequestConfig](internal_.AxiosRequestConfig.md).[xsrfHeaderName](internal_.AxiosRequestConfig.md#xsrfheadername)

#### Defined in

node_modules/axios/index.d.cts:383
