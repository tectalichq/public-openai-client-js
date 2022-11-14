import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise, ClientRequest } from '../client';
import CreateRequest from '../models/images-edits/create-image-request';
import CreateResponse from '../models/images-edits/create-image-response';

export default class ImagesEdits {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Creates an edited or extended image given an original image and a prompt.
   *
   * Operation URL: POST /images/edits
   * Operation ID:  createImageEdit
   */
  createImage(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/images/edits';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['image', 'mask']
      },
      config
    );
  }
}
