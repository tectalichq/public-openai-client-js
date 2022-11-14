import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/images-generations/create-request';
import CreateResponse from '../models/images-generations/create-response';

export default class ImagesGenerations {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates an image given a prompt.
   *
   * Operation URL: POST /images/generations
   * Operation ID:  createImage
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/images/generations';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data
      },
      config
    );
  }
}
