import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { EscrowContainer } from './escrow';
import { GenericAPI } from './generic';
import { IAuthCode, IEscrowContainer } from './models';
import { UplandUser } from './user';

/**
 * DeveloperAPI is the main class for the Upland Developer API.
 * 
 * It is used to instantiate the API and access the various API endpoints.
 * 
 * @example
 * const devAPI = new DeveloperAPI(APPLICATION_ID, ACCESS_TOKEN, true)
 * 
 * // work with the generic API
 * const someData = await devAPI.generic.someMethod();
 * 
 * // work with the user API
 * const testUser = devAPI.getUser(USER_ACCESS_TOKEN);
 * const userInformation = await testUser.getProfile();
 * 
 * // work with the escrow API
 * // create a new container
 * const testContainer = await devAPI.createContainer();
 * const containerInformation = await testContainer.getInformation();
 * 
 * // get an existing container
 * const testContainer = devAPI.getContainer(CONTAINER_ID);
 * const containerInformation = await testContainer.getInformation();
 * 
 */
class DeveloperAPI {
    private readonly _axiosInstance: AxiosInstance;
    private _baseURL: string;
    public readonly generic: GenericAPI;

    /**
     * Returns an instance of the DeveloperAPI class.
     * @example
     * const devAPI = new DeveloperAPI(APPLICATION_ID, ACCESS_TOKEN, true)
     * 
     * @param {number} applicationID - Your application ID.
     * @param {string} accessToken - Your access token for the application.
     * @param {boolean} sandbox - Whether or not to use the sandbox environment.
     * 
     * @returns {DeveloperAPI} An instance of the DeveloperAPI class.
     */
    constructor(applicationID: number, accessToken: string, sandbox = true) {
        this._baseURL = sandbox ? 'https://api.sandbox.upland.me/developers-api' : 'https://api.prod.upland.me/developers-api';
        const token = Buffer.from(`${applicationID}:${accessToken}`).toString('base64');
        this._axiosInstance = axios.create({
            timeout: 10000,
            baseURL: this._baseURL,
            headers: {
                Authorization: `Basic ${token}`
            }
        });
        this.generic = new GenericAPI(this._axiosInstance);
    }

    /**
     * Get an auth code for a user to use to connect their Upland account to your application.
     * 
     * @returns {Promise<IAuthCode>} A Promise that resolves to an object containing the auth code and the expiration date.
     */
    public async generateAuthCode(): Promise<IAuthCode> {
        try {
            const response = await this._axiosInstance.post('/auth/otp/init');
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Create a new instance of the UplandUser class to interact with the user API.
     * 
     * @param {string} accessToken 
     * @returns {UplandUser} Instance of the UplandUser class.
     */
    public getUser(accessToken: string): UplandUser {
        return new UplandUser(this._baseURL, accessToken);
    }

    /**
     * Create a new Container and get a new instance of the EscrowContainer class to interact with the escrow API.
     * 
     * @param {string} devShopId The developer shop ID.
     * @returns {Promise<EscrowContainer>} A Promise that resolves to an instance of the EscrowContainer class.
     */
    public async createContainer(devShopId?: string): Promise<EscrowContainer> {
        try {
            let response: AxiosResponse;
            if (devShopId) {
                response = await this._axiosInstance.post('/containers', { 'devShopId': devShopId });
            } else {
                response = await this._axiosInstance.post('/containers');
            }
            const container: IEscrowContainer = response.data;
            return new EscrowContainer(this._axiosInstance, container);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get an existing container and get a new instance of the EscrowContainer class to interact with the escrow API.
     * 
     * @param {string} containerId 
     * @returns {Promise<EscrowContainer>} A Promise that resolves to an instance of the EscrowContainer class.
     */
    public async getContainer(containerId: string): Promise<EscrowContainer> {
        try {
            const response = await this._axiosInstance.get(`/containers/${containerId}`);
            const container: IEscrowContainer = response.data;
            return new EscrowContainer(this._axiosInstance, container);
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

export default DeveloperAPI;