[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GetNftAssetsOptions

# Interface: GetNftAssetsOptions

[<internal>](../modules/internal_.md).GetNftAssetsOptions

## Table of contents

### Properties

- [categories](internal_.GetNftAssetsOptions.md#categories)
- [currentPage](internal_.GetNftAssetsOptions.md#currentpage)
- [pageSize](internal_.GetNftAssetsOptions.md#pagesize)
- [textSearch](internal_.GetNftAssetsOptions.md#textsearch)

## Properties

### categories

• `Optional` **categories**: [`NFTCategory`](../enums/internal_.NFTCategory.md)[]

The NFT categories to filter the assets by.

**`Default Value`**

[]

#### Defined in

[src/developer/user/models.ts:100](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/user/models.ts#L100)

___

### currentPage

• `Optional` **currentPage**: `number`

Current page number

**`Default Value`**

1

#### Defined in

[src/developer/user/models.ts:86](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/user/models.ts#L86)

___

### pageSize

• `Optional` **pageSize**: `number`

Page size between 10 and 100

**`Default Value`**

100

**`Minimum`**

10

**`Maximum`**

100

#### Defined in

[src/developer/user/models.ts:94](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/user/models.ts#L94)

___

### textSearch

• `Optional` **textSearch**: `string`

Text for NFT asset name search.

#### Defined in

[src/developer/user/models.ts:105](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/user/models.ts#L105)
