/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';
import { testPageSize, fetchPaginatedData, PaginatedResult } from '../../utils';
import { GetNeighborhoodsOptions, GetPropertiesOptions, GetTracksOptions, GetTreasureHistoryOptions, IBuilding, IBuildings, ICity, ICollection, IDevShop, INeighborhood, IProperties, IProperty, ITrack, ITracks, ITreasureHistory } from './models';

/**
 * The GenericAPI class contains methods for accessing the Upland Developer API endpoints that do not require a specific user or container.
 */
export class GenericAPI {

    /**
     * Represents the GenericAPI class.
     * 
     * @constructor
     * @param {AxiosInstance} _axiosInstance The Axios instance to use for making requests.
     * @returns {GenericAPI} An instance of the GenericAPI class. 
     */
    constructor(private readonly _axiosInstance: AxiosInstance) {}

    /**
     * Function to get all tracks.
     * @example
     * const tracks = await devAPI.generic.getTracks({ cityName: 'Manhattan', includePath: true });
     * 
     * @param {Object} options The options for fetching tracks.
     * @param {string} [options.cityName=''] The city name to filter by.
     * @param {boolean} [options.includePath=false] Whether or not to include the path of the track.
     * @returns {Promise<ITracks>} An object containing an array of tracks
     */
    public async getTracks(options: GetTracksOptions = {}): Promise<ITracks> {
        const { cityName = '', includePath = false } = options;
        let url: string;
        if (cityName !== '' && includePath) {
            url = `/tracks?city=${cityName}&includePath=true`;
        } else if (cityName !== '' && !includePath) {
            url = `/tracks?city=${cityName}`;
        } else if (cityName === '' && includePath) {
            url = '/tracks?includePath=true';
        } else {
            url = '/tracks';
        }
        try {
            const response = await this._axiosInstance.get(url);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get a track by ID.
     * @example
     * const track = await devAPI.generic.getTrackById(1);
     * 
     * @param {number} id Track ID, required.
     * @returns {Promise<ITrack>} An object containing a track.
     */
    public async getTrackById(id: number): Promise<ITrack> {
        if (!id) {
            throw new Error('Track ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/tracks/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get all buildings for a track.
     * @example
     * const buildings = await devAPI.generic.getTrackBuildings(1);
     * 
     * @param {number} id Track ID, required.
     * @returns {Promise<IBuildings>} An object containing an array of buildings.
     */
    public async getTrackBuildings(id: number): Promise<IBuildings> {
        if (!id) {
            throw new Error('Track ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/tracks/${id}/buildings`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get all buildings in a given boundary. 
     * @example
     * const buildings = await devAPI.generic.getBuildingsByBoundaries([[[40.7128, -74.0060], [40.7128, -74.0000], [40.7150, -74.0000], [40.7150, -74.0060], [40.7128, -74.0060]]]);
     * 
     * @param {Array<Array<Array<number>>>} boundaries boundaries to filter by, required.
     * @returns {Promise<Array<IBuilding>>} A Promise that resolves to an array of buildings.
     */
    public async getBuildingsByBoundaries(boundaries: Array<Array<Array<number>>>): Promise<IBuilding[]> {
        if (!boundaries) {
            throw new Error('Boundaries are required.');
        }
        try {
            const response = await this._axiosInstance.post('/buildings', {'boundaries': boundaries});
            return response.data.buildings;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get all Cities.
     * @example
     * const cities = await devAPI.generic.getCities();
     * 
     * @returns {Promise<Array<ICity>>} A Promise that resolves to an array of cities.
     */
    public async getCities(): Promise<ICity[]> {
        try {
            const response = await this._axiosInstance.get('/cities');
            return response.data.cities;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get properties for a given city.
     * @example
     * // Get properties for a given city
     * const properties = await devAPI.generic.getProperties({ currentPage: 2, cityId: 3 });
     * 
     * @param {Object} options The options for fetching properties.
     * @param {number} [options.currentPage=1] The current page number.
     * @param {number} [options.pageSize=100] The page size between 10 and 100.
     * @param {number} [options.cityId=1] The city ID to filter by.
     * @param {string} [options.textSearch=''] The text for the property address to search for.
     * 
     * @returns {Promise<PaginatedResult<IProperties>>} - A Promise resolving to an object containing an array of properties under data and a function to get the next page of results under next().
     */
    public async getProperties(options: GetPropertiesOptions = {}): Promise<PaginatedResult<IProperties>> {
        const { currentPage = 1, pageSize = 100, cityId = 1, textSearch = '' } = options;
        // if (!currentPage || !pageSize || !cityId) {
        //     throw new Error('Current page, page size, and city ID are required');
        // }
        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100');
        }
        const endpoint = '/properties';

        const params: any = {
            'currentPage': currentPage,
            'pageSize': pageSize,
            'cityId': cityId
        };
        if (textSearch !== '') {
            params.textSearch = textSearch;
        }

        return fetchPaginatedData<IProperties>(endpoint, params, this._axiosInstance);
    }

    /**
     * Function to get a property by ID.
     * @example
     * const property = await devAPI.generic.getPropertyById(79519475681868);
     * 
     * @param id property ID - required
     * @returns {Promise<IProperty>} - A Promise that resolves to a property.
     */
    public async getPropertyById(id: number): Promise<IProperty> {
        if (!id) {
            throw new Error('Property ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/properties/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get all neighborhoods.
     * @example
     * // Get all neighborhoods
     * const neighborhoods = await devAPI.generic.getNeighborhoods();
     * 
     * // Get neighborhoods for a given city
     * const neighborhoods = await devAPI.generic.getNeighborhoods({ cityId: 3 });
     * 
     * @param {Object} options - The options for fetching neighborhoods.
     * @param {number} [options.cityId=0] - The city ID to filter by.
     * @param {string} [options.textSearch=''] - The text for the property address to search for.
     * 
     * @returns {Promise<Array<INeighborhood>>} - A Promise that resolves to an array of neighborhoods.
     */
    public async getNeighborhoods(options: GetNeighborhoodsOptions = {}): Promise<INeighborhood[]> {
        const { cityId = 0, textSearch = '' } = options;
        let url: string;
        if (cityId === 0 && textSearch === '') {
            url = '/neighborhoods';
        } else if (cityId === 0 && textSearch !== '') {
            url = `/neighborhoods?textSearch=${textSearch}`;
        } else if (cityId !== 0 && textSearch === '') {
            url = `/neighborhoods?cityId=${cityId}`;
        } else {
            url = `/neighborhoods?cityId=${cityId}&textSearch=${textSearch}`;
        }
        try {
            const response = await this._axiosInstance.get(url);
            return response.data.results;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Function to get all collections.
     * @example
     * const collections = await devAPI.generic.getCollections();
     * 
     * @returns {Promise<Array<ICollection>>} Object containing an array of collections.
     */
    public async getCollections(): Promise<ICollection[]> {
        try {
            const response = await this._axiosInstance.get('/collections');
            return response.data.results;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get the treasure history.
     * @example
     * // Get treasure history
     * const treasureHistory = await devAPI.generic.getTreasureHistory();
     * 
     * // Get treasure history for a given city
     * const treasureHistory = await devAPI.generic.getTreasureHistory({ cityId: 3 });
     * 
     * @param {Object} options - The options for fetching treasure history.
     * @param {number} [options.currentPage=1] - The current page number.
     * @param {number} [options.pageSize=100] - The page size between 10 and 100.
     * @param {number} [options.cityId=0] - The city ID to filter by.
     * 
     * @returns {Promise<PaginatedResult<ITreasureHistory>>} - A Promise resolving to an object containing an array of treasure history items under data and a function to get the next page of results under next().
     */
    public async getTreasureHistory(options: GetTreasureHistoryOptions = {}): Promise<PaginatedResult<ITreasureHistory>> {
        const { currentPage = 1, pageSize = 100, cityId = 0 } = options;
        if(!testPageSize(pageSize)) {
          throw new Error('Page size must be between 10 and 100.');
        }
      
        const endpoint = '/treasures-history';
        const params = { currentPage, pageSize, cityId };
      
        return fetchPaginatedData<ITreasureHistory>(endpoint, params, this._axiosInstance);
    }

    /**
     * Get the dev shops.
     * 
     * @example
     * const devShops = await devAPI.generic.getDevShops();
     * 
     * @returns {Promise<Array<IDevShop>>} - A Promise that resolves to an array of dev shops.
     */
    public async getDevShops(): Promise<IDevShop[]> {
        try {
            const response = await this._axiosInstance.get('/devshops');
            return response.data.results;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}