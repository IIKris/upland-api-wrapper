[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / GetPropertiesOptions

# Interface: GetPropertiesOptions

[<internal>](../modules/internal_.md).GetPropertiesOptions

## Table of contents

### Properties

- [cityId](internal_.GetPropertiesOptions.md#cityid)
- [currentPage](internal_.GetPropertiesOptions.md#currentpage)
- [pageSize](internal_.GetPropertiesOptions.md#pagesize)
- [textSearch](internal_.GetPropertiesOptions.md#textsearch)

## Properties

### cityId

• `Optional` **cityId**: `number`

The city ID to filter the properties by.

**`Default Value`**

1

#### Defined in

src/developer/generic/models.ts:172

___

### currentPage

• `Optional` **currentPage**: `number`

Current page number.

**`Default Value`**

1

#### Defined in

src/developer/generic/models.ts:158

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

src/developer/generic/models.ts:166

___

### textSearch

• `Optional` **textSearch**: `string`

Text for property address search.

**`Default Value`**

''

#### Defined in

src/developer/generic/models.ts:178
