import { AxiosRequestConfig } from 'axios';
import Client, { Response } from '../client';
import CreateRequest from '../models/completions/create-request';
export default class Completions {
    client: Client;
    constructor(Client: Client);
    create(data: CreateRequest, config?: AxiosRequestConfig): Response;
}
