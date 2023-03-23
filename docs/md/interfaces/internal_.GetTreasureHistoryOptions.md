[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GetTreasureHistoryOptions

# Interface: GetTreasureHistoryOptions

[<internal>](../modules/internal_.md).GetTreasureHistoryOptions

## Table of contents

### Properties

- [cityId](internal_.GetTreasureHistoryOptions.md#cityid)
- [currentPage](internal_.GetTreasureHistoryOptions.md#currentpage)
- [pageSize](internal_.GetTreasureHistoryOptions.md#pagesize)

## Properties

### cityId

• `Optional` **cityId**: `number`

City ID to filter the treasure history by.

**`Default Value`**

0 --> all cities

#### Defined in

src/developer/generic/models.ts:214

___

### currentPage

• `Optional` **currentPage**: `number`

Current page number.

**`Default Value`**

1

#### Defined in

src/developer/generic/models.ts:200

___

### pageSize

• `Optional` **pageSize**: `number`

Page size between 10 and 100.

**`Default Value`**

100

**`Minimum`**

10

**`Maximum`**

100

#### Defined in

src/developer/generic/models.ts:208
