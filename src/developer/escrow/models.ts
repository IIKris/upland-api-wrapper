export interface ResolveActions {
    /**
     * The ID of the asset to resolve (only for Nfts).
     */
    assetId?: number;

    /**
     * The amount of the asset to resolve (only for UPX and SPARK).
     */
    amount?: number;

    /**
     * The category of the asset to resolve.
     */
    category: EscrowCategory;

    /**
     * The target EOS ID of the user to resolve the asset to.
     */
    targetEosId: string;

    /**
     * Indicates if the action is a refund operation
     */
    isRefund?: boolean;
}

/**
 * @name EscrowCategory
 * @description The categories of the assets that can be resolved.
 */
export enum EscrowCategory {
    STRUCTURE = 'structure',
    BLKEXPLORER = 'blkexplorer',
    ESSENTIAL = 'essential',
    MEMENTO = 'memento',
    STRUCTORNMT = 'structornmt',
    LANDVEHICLE = 'landvehicle',
    SPIRITHLWN = 'spirithlwn',
    OUTDOORDECOR = 'outdoordecor',
    JACKSAI = 'jacksai',
    UPX = 'upx',
    SPARK = 'spark'
}