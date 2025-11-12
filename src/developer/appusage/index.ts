/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';
import { fetchPaginatedData, PaginatedResult, testPageSize } from '../../utils';
import { GetWebhookCallsOptions, IAppWebhookCalls } from './models';

/**
 * The AppUsageAPI class contains methods for accessing app usage information endpoints.
 */
export class AppUsageAPI {

    /**
     * Represents the AppUsageAPI class.
     *
     * @constructor
     * @param {AxiosInstance} _axiosInstance The Axios instance to use for making requests.
     * @returns {AppUsageAPI} An instance of the AppUsageAPI class.
     */
    constructor(private readonly _axiosInstance: AxiosInstance) {}

    /**
     * Get app webhook calls history. Available for data from the last three months of use.
     *
     * @example
     * const webhookCalls = await devAPI.appUsage.getWebhookCalls({
     *   startDate: '2023-05-10',
     *   endDate: '2023-06-10'
     * });
     *
     * @param {Object} options - The options for fetching webhook calls.
     * @param {string} options.startDate - Start date to filter the history (required).
     * @param {string} options.endDate - End date to filter the history (required).
     * @param {string} [options.notificationType] - (Optional) Available notification type.
     * @param {boolean} [options.isSuccess] - (Optional) Filter by success status.
     * @param {number} [options.containerId] - (Optional) Filter by container ID.
     * @param {number} [options.currentPage=1] - The current page number.
     * @param {number} [options.pageSize=100] - The page size between 10 and 100.
     *
     * @returns {Promise<PaginatedResult<IAppWebhookCalls>>} - A Promise resolving to webhook calls with pagination.
     */
    public async getWebhookCalls(options: GetWebhookCallsOptions): Promise<PaginatedResult<IAppWebhookCalls>> {
        const {
            startDate,
            endDate,
            notificationType,
            isSuccess,
            containerId,
            currentPage = 1,
            pageSize = 100
        } = options;

        if (!startDate || !endDate) {
            throw new Error('Start date and end date are required.');
        }

        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100.');
        }

        const endpoint = '/app-usage/webhook-calls';

        const params: any = {
            startDate,
            endDate,
            currentPage,
            pageSize
        };

        if (notificationType) {
            params.notificationType = notificationType;
        }
        if (isSuccess !== undefined) {
            params.isSuccess = isSuccess;
        }
        if (containerId !== undefined) {
            params.containerId = containerId;
        }

        return fetchPaginatedData<IAppWebhookCalls>(endpoint, params, this._axiosInstance);
    }
}
