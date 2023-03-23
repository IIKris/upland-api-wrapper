[Upland Developer API](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ResolveActions

# Interface: ResolveActions

[<internal>](../modules/internal_.md).ResolveActions

## Table of contents

### Properties

- [amount](internal_.ResolveActions.md#amount)
- [assetId](internal_.ResolveActions.md#assetid)
- [category](internal_.ResolveActions.md#category)
- [isRefund](internal_.ResolveActions.md#isrefund)
- [targetEosId](internal_.ResolveActions.md#targeteosid)

## Properties

### amount

• `Optional` **amount**: `number`

The amount of the asset to resolve (only for UPX and SPARK).

#### Defined in

[src/developer/escrow/models.ts:10](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/escrow/models.ts#L10)

___

### assetId

• `Optional` **assetId**: `number`

The ID of the asset to resolve (only for Nfts).

#### Defined in

[src/developer/escrow/models.ts:5](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/escrow/models.ts#L5)

___

### category

• **category**: [`EscrowCategory`](../enums/internal_.EscrowCategory.md)

The category of the asset to resolve.

#### Defined in

[src/developer/escrow/models.ts:15](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/escrow/models.ts#L15)

___

### isRefund

• `Optional` **isRefund**: `boolean`

Indicates if the action is a refund operation

#### Defined in

[src/developer/escrow/models.ts:25](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/escrow/models.ts#L25)

___

### targetEosId

• **targetEosId**: `string`

The target EOS ID of the user to resolve the asset to.

#### Defined in

[src/developer/escrow/models.ts:20](https://github.com/IIKris/upland-api-wrapper/blob/30ebe98/src/developer/escrow/models.ts#L20)
