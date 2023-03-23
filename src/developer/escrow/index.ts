import { AxiosInstance } from 'axios';
import { IEscrowContainer } from '../models';
import { EscrowCategory, ResolveActions } from './models';


export class EscrowContainer {
    private readonly _escrowAxiosInstance: AxiosInstance;
    private _container: IEscrowContainer;

    /**
     * 
     * @param {AxiosInstance} _axiosInstance The axios instance to use for the API calls.
     * @param {number} containerID The ID of the container.
     */
    constructor(_axiosInstance: AxiosInstance, container: IEscrowContainer) {
        this._escrowAxiosInstance = _axiosInstance;
        this._container = container;
    }

    /**
     * Get the ID of the container.
     * 
     * @returns {number} The ID of the container.
     */
    public getId(): number {
        return this._container.id;
    }

    /**
     * Get the developer shop ID of the container.
     * 
     * @returns {string | null} The developer shop ID of the container.
     */
    public getDevShopId(): string | null {
        return this._container.devShopId;
    }

    /**
     * Method to update the container information and return the updated information.
     * 
     * @returns {Promise<IEscrowContainer>} A Promise that resolves to an object containing the container information.
     */
    public async getInformation(): Promise<IEscrowContainer> {
        try {
            const response = await this._escrowAxiosInstance.get(`/containers/${this._container.id}`);
            this._container = response.data;
            return this._container;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * It sends back the assets inside the container to the original owners (no fees) and resolves the container.
     * 
     * @returns {Promise<{transactionId: string}>} A Promise that resolves to an object containing the transaction ID.
     */
    public async refund(): Promise<{transactionId: string}> {
        try {
            const response = await this._escrowAxiosInstance.post(`/containers/${this._container.id}/refund`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * 
     * @param {ResolveActions} resolveActions the resolve actions to perform.
     * @param {string} resolveActions.targetEosId The EOS ID of the user to resolve the assets to.
     * @param {string} resolveActions.category The category of the assets to resolve.
     * @param {number} [resolveActions.amount] The quantity of the assets to resolve. If not specified, all the assets of the category will be resolved.
     * @param {number} [resolveActions.assetId] The ID of the asset to resolve. If not specified, all the assets of the category will be resolved.
     * @param {boolean} [resolveActions.isRefund] Indicates if the action is a refund operation. If not specified, the default value is false.
     * 
     * @returns {Promise<{transactionId: string}>} A Promise that resolves to an object containing the transaction ID.
     */
    public async resolve(resolveActions: Array<ResolveActions>): Promise<{transactionId: string}> {
        if (resolveActions.length === 0) {
            throw new Error('The resolve actions array cannot be empty.');
        }

        for(const action of resolveActions) {
            if (!action.targetEosId) {
                throw new Error('The target EOS ID cannot be empty.');
            }
            if (!action.category) {
                throw new Error('The category cannot be empty.');
            }
            if (!Object.values(EscrowCategory).includes(action.category)) {
                throw new Error(`The category ${action.category} is not valid.`);
            }
        }
        try {
            const response = await this._escrowAxiosInstance.post(`/containers/${this._container.id}/resolve`, { 'actions': resolveActions });
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Removes a transaction that has not been signed by the user from container.
     * 
     * @param {string} transactionId The ID of the transaction to delete.
     */
    public async deleteTransaction(transactionId: string): Promise<void> {
        try {
            await this._escrowAxiosInstance.delete(`/containers/${this._container.id}/transactions/${transactionId}`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Method to lock the container and prevent any further changes.
     */
    public async lock(): Promise<void> {
        try {
            await this._escrowAxiosInstance.post(`/containers/${this._container.id}/lock`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Method to refresh the expiration time of the container.
     */
    public async refreshExpirationTime(): Promise<void> {
        try {
            await this._escrowAxiosInstance.post(`/containers/${this._container.id}/refresh-expiration-time`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

}