import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Completions from './handlers/completions';
export declare type Response = Promise<AxiosResponse<any, any>>;
export interface Request {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
    path: string;
    data?: object;
    headers?: Record<string, string | number | boolean>;
    params?: Record<string, any>;
}
export default class {
    #private;
    instance: AxiosInstance;
    completions: Completions;
    constructor(instance: AxiosInstance);
    request(request: Request, config?: AxiosRequestConfig): Response;
}
