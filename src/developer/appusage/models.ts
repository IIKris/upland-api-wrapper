export interface IAppWebhookCall {
    notificationType: string;
    attemptNumber: number;
    attemptedAt: string;
    isSuccess: boolean;
    request: object;
    response: object;
    containerId?: number;
}

export interface IAppWebhookCalls {
    results: IAppWebhookCall[];
    currentPage: number;
    pageSize: number;
    totalResults: number;
}

export interface GetWebhookCallsOptions {
    /**
     * Start date to filter the history
     */
    startDate: string;

    /**
     * End date to filter the history
     */
    endDate: string;

    /**
     * (Optional) Available notification type
     */
    notificationType?: string;

    /**
     * (Optional) Usage in case of the attempted was succeeded
     */
    isSuccess?: boolean;

    /**
     * (Optional) Applied only for notification types associated to container actions
     */
    containerId?: number;

    /**
     * Current page number
     * @defaultValue 1
     */
    currentPage?: number;

    /**
     * Page size between 10 and 100
     * @defaultValue 100
     */
    pageSize?: number;
}
