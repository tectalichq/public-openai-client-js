import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise, ClientRequest } from '../client';
import CreateRequest from '../models/images-variations/create-image-request';
import CreateResponse from '../models/images-variations/create-image-response';

export default class ImagesVariations {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates a variation of a given image.
   *
   * Operation URL: POST /images/variations
   * Operation ID:  createImageVariation
   */
  createImage(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/images/variations';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['image']
      },
      config
    );
  }
}
