[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GenericAPI

# Class: GenericAPI

[<internal>](../modules/internal_.md).GenericAPI

The GenericAPI class contains methods for accessing the Upland Developer API endpoints that do not require a specific user or container.

## Table of contents

### Constructors

- [constructor](internal_.GenericAPI.md#constructor)

### Properties

- [\_axiosInstance](internal_.GenericAPI.md#_axiosinstance)

### Methods

- [getBuildingsByBoundaries](internal_.GenericAPI.md#getbuildingsbyboundaries)
- [getCities](internal_.GenericAPI.md#getcities)
- [getCollections](internal_.GenericAPI.md#getcollections)
- [getDevShops](internal_.GenericAPI.md#getdevshops)
- [getNeighborhoods](internal_.GenericAPI.md#getneighborhoods)
- [getProperties](internal_.GenericAPI.md#getproperties)
- [getPropertyById](internal_.GenericAPI.md#getpropertybyid)
- [getTrackBuildings](internal_.GenericAPI.md#gettrackbuildings)
- [getTrackById](internal_.GenericAPI.md#gettrackbyid)
- [getTracks](internal_.GenericAPI.md#gettracks)
- [getTreasureHistory](internal_.GenericAPI.md#gettreasurehistory)

## Constructors

### constructor

• **new GenericAPI**(`_axiosInstance`)

Represents the GenericAPI class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_axiosInstance` | [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md) | The Axios instance to use for making requests. |

#### Defined in

src/developer/generic/index.ts:19

## Properties

### \_axiosInstance

• `Private` `Readonly` **\_axiosInstance**: [`AxiosInstance`](../interfaces/internal_.AxiosInstance.md)

The Axios instance to use for making requests.

#### Defined in

src/developer/generic/index.ts:19

## Methods

### getBuildingsByBoundaries

▸ **getBuildingsByBoundaries**(`boundaries`): `Promise`<[`IBuilding`](../interfaces/internal_.IBuilding.md)[]\>

Function to get all buildings in a given boundary.

**`Example`**

```ts
const buildings = await devAPI.generic.getBuildingsByBoundaries([[[40.7128, -74.0060], [40.7128, -74.0000], [40.7150, -74.0000], [40.7150, -74.0060], [40.7128, -74.0060]]]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundaries` | `number`[][][] | boundaries to filter by, required. |

#### Returns

`Promise`<[`IBuilding`](../interfaces/internal_.IBuilding.md)[]\>

A Promise that resolves to an array of buildings.

#### Defined in

src/developer/generic/index.ts:99

___

### getCities

▸ **getCities**(): `Promise`<[`ICity`](../interfaces/internal_.ICity.md)[]\>

Function to get all Cities.

**`Example`**

```ts
const cities = await devAPI.generic.getCities();
```

#### Returns

`Promise`<[`ICity`](../interfaces/internal_.ICity.md)[]\>

A Promise that resolves to an array of cities.

#### Defined in

src/developer/generic/index.ts:118

___

### getCollections

▸ **getCollections**(): `Promise`<[`ICollection`](../interfaces/internal_.ICollection.md)[]\>

Function to get all collections.

**`Example`**

```ts
const collections = await devAPI.generic.getCollections();
```

#### Returns

`Promise`<[`ICollection`](../interfaces/internal_.ICollection.md)[]\>

Object containing an array of collections.

#### Defined in

src/developer/generic/index.ts:225

___

### getDevShops

▸ **getDevShops**(): `Promise`<[`IDevShop`](../interfaces/internal_.IDevShop.md)[]\>

Get the dev shops.

**`Example`**

```ts
const devShops = await devAPI.generic.getDevShops();
```

#### Returns

`Promise`<[`IDevShop`](../interfaces/internal_.IDevShop.md)[]\>

- A Promise that resolves to an array of dev shops.

#### Defined in

src/developer/generic/index.ts:270

___

### getNeighborhoods

▸ **getNeighborhoods**(`options?`): `Promise`<[`INeighborhood`](../interfaces/internal_.INeighborhood.md)[]\>

Function to get all neighborhoods.

**`Example`**

```ts
// Get all neighborhoods
const neighborhoods = await devAPI.generic.getNeighborhoods();

// Get neighborhoods for a given city
const neighborhoods = await devAPI.generic.getNeighborhoods({ cityId: 3 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetNeighborhoodsOptions`](../interfaces/internal_.GetNeighborhoodsOptions.md) | The options for fetching neighborhoods. |

#### Returns

`Promise`<[`INeighborhood`](../interfaces/internal_.INeighborhood.md)[]\>

- A Promise that resolves to an array of neighborhoods.

#### Defined in

src/developer/generic/index.ts:198

___

### getProperties

▸ **getProperties**(`options?`): `Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IProperties`](../interfaces/internal_.IProperties.md)\>\>

Function to get properties for a given city.

**`Example`**

```ts
// Get properties for a given city
const properties = await devAPI.generic.getProperties({ currentPage: 2, cityId: 3 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetPropertiesOptions`](../interfaces/internal_.GetPropertiesOptions.md) | The options for fetching properties. |

#### Returns

`Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`IProperties`](../interfaces/internal_.IProperties.md)\>\>

- A Promise resolving to an object containing an array of properties under data and a function to get the next page of results under next().

#### Defined in

src/developer/generic/index.ts:141

___

### getPropertyById

▸ **getPropertyById**(`id`): `Promise`<[`IProperty`](../interfaces/internal_.IProperty.md)\>

Function to get a property by ID.

**`Example`**

```ts
const property = await devAPI.generic.getPropertyById(79519475681868);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | property ID - required |

#### Returns

`Promise`<[`IProperty`](../interfaces/internal_.IProperty.md)\>

- A Promise that resolves to a property.

#### Defined in

src/developer/generic/index.ts:171

___

### getTrackBuildings

▸ **getTrackBuildings**(`id`): `Promise`<[`IBuildings`](../interfaces/internal_.IBuildings.md)\>

Function to get all buildings for a track.

**`Example`**

```ts
const buildings = await devAPI.generic.getTrackBuildings(1);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Track ID, required. |

#### Returns

`Promise`<[`IBuildings`](../interfaces/internal_.IBuildings.md)\>

An object containing an array of buildings.

#### Defined in

src/developer/generic/index.ts:79

___

### getTrackById

▸ **getTrackById**(`id`): `Promise`<[`ITrack`](../interfaces/internal_.ITrack.md)\>

Function to get a track by ID.

**`Example`**

```ts
const track = await devAPI.generic.getTrackById(1);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | Track ID, required. |

#### Returns

`Promise`<[`ITrack`](../interfaces/internal_.ITrack.md)\>

An object containing a track.

#### Defined in

src/developer/generic/index.ts:59

___

### getTracks

▸ **getTracks**(`options?`): `Promise`<[`ITracks`](../interfaces/internal_.ITracks.md)\>

Function to get all tracks.

**`Example`**

```ts
const tracks = await devAPI.generic.getTracks({ cityName: 'Manhattan', includePath: true });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetTracksOptions`](../interfaces/internal_.GetTracksOptions.md) | The options for fetching tracks. |

#### Returns

`Promise`<[`ITracks`](../interfaces/internal_.ITracks.md)\>

An object containing an array of tracks

#### Defined in

src/developer/generic/index.ts:31

___

### getTreasureHistory

▸ **getTreasureHistory**(`options?`): `Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`ITreasureHistory`](../interfaces/internal_.ITreasureHistory.md)\>\>

Get the treasure history.

**`Example`**

```ts
// Get treasure history
const treasureHistory = await devAPI.generic.getTreasureHistory();

// Get treasure history for a given city
const treasureHistory = await devAPI.generic.getTreasureHistory({ cityId: 3 });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GetTreasureHistoryOptions`](../interfaces/internal_.GetTreasureHistoryOptions.md) | The options for fetching treasure history. |

#### Returns

`Promise`<[`PaginatedResult`](../modules/internal_.md#paginatedresult)<[`ITreasureHistory`](../interfaces/internal_.ITreasureHistory.md)\>\>

- A Promise resolving to an object containing an array of treasure history items under data and a function to get the next page of results under next().

#### Defined in

src/developer/generic/index.ts:250
