import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import Completions from './handlers/completions';
export interface ClientPromise<Data> extends AxiosPromise<Data> {
}
export interface ClientRequest {
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
    request<Data>(request: ClientRequest, config?: AxiosRequestConfig): ClientPromise<Data>;
}
