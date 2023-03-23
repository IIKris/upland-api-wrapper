export interface IAuthCode {
    code: string;
    expireAt: string;
}

export interface IEscrowAsset {
    id: number;
    transactionId: string;
    category: string;
    ownerEosId: string;
    status: string;
    amount?: number;
    assetId?: number;
}

export interface IEscrowContainer {
    id: number;
    appId: number;
    status: string;
    expirationDate: string;
    devShopId: string | null;
    upx?: number;
    spark?: number;
    assets?: IEscrowAsset[];
}