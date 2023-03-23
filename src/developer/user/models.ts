import { ICityShort, INeighborhoodShort } from '../generic/models';

export interface IUserProfile {
    id: string;
    eosId: string;
    username: string;
    networth: number;
    level: string;
    avatarUrl: string;
    initialCity: string;
    currentCity: string;
    currentCityId: number;
    isInJail: boolean;
    rp3dAvatarUrl?: string;
}

export interface IUserBalances {
    availableUpx: number;
    availableSpark: number;
    stakedSpark: number;
    availableSends: number;
}

export interface IUserNftAsset {
    id: number;
    category: NFTCategory;
    name: string;
    displayName?: string;
    rarityLevel?: string | null;
    thumbnail: string;
    mintNumber: number;
    modelUrl?: string;
    metadata: {
        textureUrl?: string;
    };
}

export interface IUserNftAssets {
    results: IUserNftAsset[];
    currentPage: number;
    pageSize: number;
    totalResults: number;
}

export interface ICollectionShort {
    id: number;
    name: string;
}

export interface IProperty {
    id: number;
    address: string;
    city: ICityShort;
    neighborhood: INeighborhoodShort;
    status: string;
    collection?: ICollectionShort;
}

export interface IProperties {
    currentPage: number;
    pageSize: number;
    totalResults: number;
    results: IProperty[];
}

export interface ITravel {
    currentPage: number;
    pageSize: number;
    totalResults: number;
    results: ITravelItem[];
}

export interface ITravelItem {
    startDate: string;
    endDate: string;
    from: Array<number>;
    to: Array<number>;
    type: string;
}

export interface GetNftAssetsOptions {
    /**
     * Current page number
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100
     * @defaultValue 100
     * @minimum 10
     * @maximum 100
     */
    pageSize?: number;

    /**
     * The NFT categories to filter the assets by.
     * @defaultValue []
     */
    categories?: Array<NFTCategory>;

    /**
     * Text for NFT asset name search.   
     */
    textSearch?: string;
}

export interface GetPropertiesOptions {
    /**
     * Current page number.
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100.
     * @defaultValue 100
     * @minimum 10
     * @maximum 100
     */
    pageSize?: number;

    /**
     * The city ID to filter the properties by.
     * @defaultValue 0 --> all cities
     */
    cityId?: number;

    /**
     * Text for property address search.
     * @defaultValue ''
     */
    textSearch?: string;
}

export interface GetTravelOptions {
    /**
     * Current page number.
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100.
     * @defaultValue 100
     * @minimum 10
     * @maximum 100
     */
    pageSize?: number;
}

export interface PutInEscrowOptions {
    /**
     * The container ID to put the asset into.
     */
    containerId: number;

    /**
     * The upx amount to put in escrow.
     */
    upxAmount?: number;

    /**
     * The NFT assets to put in escrow.
     */
    assets?: Array<{
        id: number;
        category: NFTEscrowCategory;
    }>;
}

/**
 * @name NFTCategory
 * @description This enum is used to define the NFT categories.
 */
export enum NFTCategory {
    STRUCTURE = 'structure',
    BLKEXPLORER = 'blkexplorer',
    ESSENTIAL = 'essential',
    MEMENTO = 'memento',
    STRUCTORNMT = 'structornmt',
    LANDVEHICLE = 'landvehicle',
    SPIRITHLWN = 'spirithlwn',
    OUTDOORDECOR = 'outdoordecor',
    JACKSAI = 'jacksai',
}

/**
 * @name NFTEscrowCategory
 * @description This enum is used to define the NFT categories that are allowed to put in escrow.
 */
export enum NFTEscrowCategory {
    SPIRITHLWN = 'spirithlwn',
    JACKSAI = 'jacksai',
    BLKEXPLORER = 'blkexplorer',
    STRUCTORNMT = 'structornmt'
}