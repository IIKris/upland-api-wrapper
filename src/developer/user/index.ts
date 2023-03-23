/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';
import { fetchPaginatedData, PaginatedResult, testPageSize } from '../../utils';
import { GetNftAssetsOptions, GetPropertiesOptions, IUserBalances, IUserNftAssets, IUserProfile, NFTCategory, IProperties, PutInEscrowOptions, NFTEscrowCategory, ITravel, GetTravelOptions } from './models';

/**
 * @name UplandUser
 * @description This class is used to manage the user API.
 * 
 * @example
 * const devAPI = new DeveloperAPI(param1, param2, param3);
 * const testUser = devAPI.createUser('USER-TOKEN-HERE');
 */

export class UplandUser {
    private readonly _userAxiosInstance: AxiosInstance;
    private _baseURL: string;

    /**
     * Creates an instance of UplandUser.
     * 
     * @param {string} baseURL The base URL for the API.
     * @param {string} accessToken The access token for the user.
     */
    constructor(baseURL: string, accessToken: string) {
        this._baseURL = baseURL;
        this._userAxiosInstance = axios.create({
            timeout: 10000,
            baseURL: this._baseURL,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

    /**
     * Get the user profile.
     * 
     * @returns {Promise<IUserProfile>} The user profile.
     */
    public async getProfile(): Promise<IUserProfile> {
        try {
            const response = await this._userAxiosInstance.get('/user/profile');
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Gets the user balances.
     * 
     * @returns {Promise<IUserBalances>} The user balances (upx, spark, sends).
     */
    public async getBalances() : Promise<IUserBalances> {
        try {
            const response = await this._userAxiosInstance.get('/user/balances');
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get the nft assets of the user.
     * 
     * @param {Object} options The options for fetching the NFT assets.
     * @param {number} [options.currentPage=1] The current page number.
     * @param {number} [options.pageSize=100] The page size between 10 and 100.
     * @param {number} [options.categories=[]] The array of categories to search for.
     * @param {string} [options.textSearch=''] The text for the property address to search for.
     * 
     * @returns {Promise<PaginatedResult<IUserNftAssets>>} The paginated result of the NFT assets.
     */
    public async getNftAssets(options: GetNftAssetsOptions = {}) : Promise<PaginatedResult<IUserNftAssets>> {
        const { currentPage = 1, pageSize = 100, categories = [], textSearch = ''} = options;
        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100');
        }

        for(const category of categories) {
            if (!Object.values(NFTCategory).includes(category)) {
                throw new Error('Invalid category');
            }
        }

        const endpoint = '/user/assets/nfts';

        const params: any = {
            'currentPage': currentPage,
            'pageSize': pageSize,
        };
        if (textSearch !== '') {
            params.textSearch = textSearch;
        }
        if (categories.length > 0) {
            params.categories = categories;
        }

        return fetchPaginatedData<IUserNftAssets>(endpoint, params, this._userAxiosInstance);
    }

    /**
     * Function to get properties for a given city.
     * 
     * @param {Object} options The options for fetching properties.
     * @param {number} [options.currentPage=1] The current page number.
     * @param {number} [options.pageSize=100] The page size between 10 and 100.
     * @param {number} [options.cityId=1] The city ID to filter by.
     * @param {string} [options.textSearch=''] The text for the property address to search for.
     * 
     * @returns {Promise<PaginatedResult<IProperties>>} - A Promise resolving to an object containing an array of properties under data and a function to get the next page of results under next().
     */
    public async getProperties(options: GetPropertiesOptions = {}) : Promise<PaginatedResult<IProperties>> {
        const { currentPage = 1, pageSize = 100, cityId = 0, textSearch = '' } = options;
        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100');
        }
        const endpoint = '/user/assets/properties';

        const params: any = {
            'currentPage': currentPage,
            'pageSize': pageSize
        };
        if (cityId !== 0 && cityId > 0) {
            params.cityId = cityId;
        }
        if (textSearch !== '') {
            params.textSearch = textSearch;
        }

        return fetchPaginatedData<IProperties>(endpoint, params, this._userAxiosInstance);
    }

    /**
     * 
     * @param {Object} options The options for fetching travels of a user.
     * @param {number} [options.currentPage=1] The current page number.
     * @param {number} [options.pageSize=100] The page size between 10 and 100.
     * 
     * @returns {Promise<PaginatedResult<ITravel>>} The paginated result of the travels. 
     */
    public async getTravels(options: GetTravelOptions = {}): Promise<PaginatedResult<ITravel>> {
        const { currentPage = 1, pageSize = 100 } = options;
        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100');
        }

        const endpoint = '/user/travels';

        const params: any = {
            'currentPage': currentPage,
            'pageSize': pageSize
        };

        return fetchPaginatedData<ITravel>(endpoint, params, this._userAxiosInstance);
    }

    /**
     * Function to put assets in escrow for a user.
     * 
     * @param {Object} options The options for putting assets in escrow.
     * @param {number} [options.containerId] The container ID.
     * @param {number} [options.assets] The array of assets to put in escrow.
     * @param {number} [options.assets.id] The asset ID.
     * @param {number} [options.assets.category] The asset category.
     * 
     * @returns {Promise<{transactionId: string}>} The transaction ID.
     */
    public async putAssetsInEscrow(options: PutInEscrowOptions) : Promise<{transactionId: string}> {
        const { containerId, ...otherParams } = options;
        if (!containerId) {
            throw new Error('Container ID is required');
        }

        if (otherParams.assets && otherParams.assets.length > 0) {
            for (const asset of otherParams.assets) {
                if (!asset.id || !asset.category) {
                    throw new Error('Asset ID and Category are required');
                }
                // check if asset is valid (in NFTEscrowCategory)
                if (Object.values(NFTEscrowCategory).includes(asset.category)) {
                    throw new Error('Invalid asset category');
                }
            }
        }

        const body = {
            containerId,
            ...otherParams
        }

        try {
            const response = await this._userAxiosInstance.post('/user/join', body);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}