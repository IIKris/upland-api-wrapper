/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance } from 'axios';

/**
 * Next function type for paginated results.
 * 
 * @typedef {() => Promise<PaginatedResult<T> | null>} NextFunction
 * @template T
 * @property {T} data The data for the current page.
 * @property {NextFunction<T> | null} next The next function to call to get the next page of results.
 * @returns {Promise<PaginatedResult<T> | null>} The next page of results or null if there are no more results.
 */
export type NextFunction<T> = () => Promise<PaginatedResult<T> | null>;

/**
 * Paginated result type.
 * 
 * @typedef {Object} PaginatedResult
 * @template T
 * @property {T} data The data for the current page.
 * @property {NextFunction<T> | null} next The next function to call to get the next page of results.
 * @returns {Promise<PaginatedResult<T> | null>} The next page of results or null if there are no more results.
 */
export type PaginatedResult<T> = {
  data: T;
  next: NextFunction<T> | null;
};

export function testPageSize(pageSize: number): boolean {
    if (pageSize < 10 || pageSize > 100) {
        return false;
    }
    return true;
}

/**
 * Sleep for the specified number of milliseconds.
 * 
 * @param ms milliseconds to sleep for
 * @returns {Promise<void>} a promise that resolves after the specified time
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Method to get the result data and a next function for paginated data.
 * 
 * @param endpoint api endpoint
 * @param params params to pass to the endpoint
 * @returns {Promise<PaginatedResult<T>>} data and a next function
 */
export async function fetchPaginatedData<T extends object>(
    endpoint: string,
    params: any,
    _axiosInstance: AxiosInstance
): Promise<PaginatedResult<T>> {
    const { currentPage, pageSize, ...otherParams } = params;
    for (const key in otherParams) {
        if (Array.isArray(otherParams[key])) {
            // form key[]=value1&key[]=value2
            const arrayParams = otherParams[key].map((value: any) => `${key}[]=${value}`);
            otherParams[key] = arrayParams.join('&');
        }
    }
    const queryString = new URLSearchParams({ ...otherParams, currentPage, pageSize }).toString();
    const url = `${endpoint}?${queryString}`;
  
    try {
        const response = await _axiosInstance.get(url);
        const results: T = response.data;
    
        // Check if there are more results available
        const totalResults = 'totalResults' in results ? (results as any)['totalResults'] : undefined;
        const hasMoreResults = totalResults !== undefined ? currentPage * pageSize < totalResults : true;
    
        // Define the next function based on the availability of more results
        const next: NextFunction<T> | null = hasMoreResults
            ? async (): Promise<PaginatedResult<T> | null> => {
                return fetchPaginatedData<T>(endpoint, { ...params, currentPage: currentPage + 1 }, _axiosInstance);
            }
            : null;
    
        return { data: results, next };
    } catch (error) {
        throw new Error(String(error));
    }
}