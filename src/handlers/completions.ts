import { AxiosRequestConfig } from 'axios';
import Client, { Response } from '../client';
import CreateRequest from '../models/completions/create-request';

export default class Completions {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  create(data: CreateRequest, config?: AxiosRequestConfig): Response {
    const path = '/completions';
    return this.client.request(
      {
        method: 'POST',
        path,
        data,
      },
      config
    );
  }
}
