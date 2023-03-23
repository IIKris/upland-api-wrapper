[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AxiosHeaders

# Class: AxiosHeaders

[<internal>](../modules/internal_.md).AxiosHeaders

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](internal_.AxiosHeaders.md#constructor)

### Methods

- [[iterator]](internal_.AxiosHeaders.md#[iterator])
- [clear](internal_.AxiosHeaders.md#clear)
- [concat](internal_.AxiosHeaders.md#concat)
- [delete](internal_.AxiosHeaders.md#delete)
- [get](internal_.AxiosHeaders.md#get)
- [getAccept](internal_.AxiosHeaders.md#getaccept)
- [getAuthorization](internal_.AxiosHeaders.md#getauthorization)
- [getContentEncoding](internal_.AxiosHeaders.md#getcontentencoding)
- [getContentLength](internal_.AxiosHeaders.md#getcontentlength)
- [getContentType](internal_.AxiosHeaders.md#getcontenttype)
- [getUserAgent](internal_.AxiosHeaders.md#getuseragent)
- [has](internal_.AxiosHeaders.md#has)
- [hasAccept](internal_.AxiosHeaders.md#hasaccept)
- [hasAuthorization](internal_.AxiosHeaders.md#hasauthorization)
- [hasContentEncoding](internal_.AxiosHeaders.md#hascontentencoding)
- [hasContentLength](internal_.AxiosHeaders.md#hascontentlength)
- [hasContentType](internal_.AxiosHeaders.md#hascontenttype)
- [hasUserAgent](internal_.AxiosHeaders.md#hasuseragent)
- [normalize](internal_.AxiosHeaders.md#normalize)
- [set](internal_.AxiosHeaders.md#set)
- [setAccept](internal_.AxiosHeaders.md#setaccept)
- [setAuthorization](internal_.AxiosHeaders.md#setauthorization)
- [setContentEncoding](internal_.AxiosHeaders.md#setcontentencoding)
- [setContentLength](internal_.AxiosHeaders.md#setcontentlength)
- [setContentType](internal_.AxiosHeaders.md#setcontenttype)
- [setUserAgent](internal_.AxiosHeaders.md#setuseragent)
- [toJSON](internal_.AxiosHeaders.md#tojson)
- [accessor](internal_.AxiosHeaders.md#accessor)
- [concat](internal_.AxiosHeaders.md#concat-1)
- [from](internal_.AxiosHeaders.md#from)

## Constructors

### constructor

• **new AxiosHeaders**(`headers?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md) \| [`AxiosHeaders`](internal_.AxiosHeaders.md) |

#### Defined in

node_modules/axios/index.d.cts:20

## Methods

### [iterator]

▸ **[iterator]**(): [`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)]\>

#### Returns

[`IterableIterator`](../interfaces/internal_.IterableIterator.md)<[`string`, [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)]\>

#### Defined in

node_modules/axios/index.d.cts:80

___

### clear

▸ **clear**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:36

___

### concat

▸ **concat**(`...targets`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...targets` | (`undefined` \| ``null`` \| `string` \| [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md) \| [`AxiosHeaders`](internal_.AxiosHeaders.md))[] |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:40

___

### delete

▸ **delete**(`header`, `matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` \| `string`[] |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:34

___

### get

▸ **get**(`headerName`, `parser`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |
| `parser` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:29

▸ **get**(`headerName`, `matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName` | `string` |
| `matcher?` | ``true`` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:30

___

### getAccept

▸ **getAccept**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:61

▸ **getAccept**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:62

___

### getAuthorization

▸ **getAuthorization**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:76

▸ **getAuthorization**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:77

___

### getContentEncoding

▸ **getContentEncoding**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:71

▸ **getContentEncoding**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:72

___

### getContentLength

▸ **getContentLength**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:56

▸ **getContentLength**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:57

___

### getContentType

▸ **getContentType**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:51

▸ **getContentType**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:52

___

### getUserAgent

▸ **getUserAgent**(`parser?`): ``null`` \| `RegExpExecArray`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser?` | `RegExp` |

#### Returns

``null`` \| `RegExpExecArray`

#### Defined in

node_modules/axios/index.d.cts:66

▸ **getUserAgent**(`matcher?`): [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue)

#### Defined in

node_modules/axios/index.d.cts:67

___

### has

▸ **has**(`header`, `matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `matcher?` | ``true`` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:32

___

### hasAccept

▸ **hasAccept**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:63

___

### hasAuthorization

▸ **hasAuthorization**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:78

___

### hasContentEncoding

▸ **hasContentEncoding**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:73

___

### hasContentLength

▸ **hasContentLength**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:58

___

### hasContentType

▸ **hasContentType**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:53

___

### hasUserAgent

▸ **hasUserAgent**(`matcher?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher?` | [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.cts:68

___

### normalize

▸ **normalize**(`format`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `boolean` |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:38

___

### set

▸ **set**(`headerName?`, `value?`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerName?` | `string` |
| `value?` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:26

▸ **set**(`headers?`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md) \| [`AxiosHeaders`](internal_.AxiosHeaders.md) |
| `rewrite?` | `boolean` |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:27

___

### setAccept

▸ **setAccept**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:60

___

### setAuthorization

▸ **setAuthorization**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:75

___

### setContentEncoding

▸ **setContentEncoding**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:70

___

### setContentLength

▸ **setContentLength**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:55

___

### setContentType

▸ **setContentType**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ContentType`](../modules/internal_.md#contenttype) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:50

___

### setUserAgent

▸ **setUserAgent**(`value`, `rewrite?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AxiosHeaderValue`](../modules/internal_.md#axiosheadervalue) |
| `rewrite?` | `boolean` \| [`AxiosHeaderMatcher`](../modules/internal_.md#axiosheadermatcher) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:65

___

### toJSON

▸ **toJSON**(`asStrings?`): [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `asStrings?` | `boolean` |

#### Returns

[`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:42

___

### accessor

▸ `Static` **accessor**(`header`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` \| `string`[] |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:46

___

### concat

▸ `Static` **concat**(`...targets`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...targets` | (`undefined` \| ``null`` \| `string` \| [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md) \| [`AxiosHeaders`](internal_.AxiosHeaders.md))[] |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:48

___

### from

▸ `Static` **from**(`thing?`): [`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing?` | `string` \| [`RawAxiosHeaders`](../interfaces/internal_.RawAxiosHeaders.md) \| [`AxiosHeaders`](internal_.AxiosHeaders.md) |

#### Returns

[`AxiosHeaders`](internal_.AxiosHeaders.md)

#### Defined in

node_modules/axios/index.d.cts:44
