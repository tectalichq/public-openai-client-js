import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/images-edits/create-image-request';
import CreateResponse from '../models/images-edits/create-image-response';
export default class ImagesEdits {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates an edited or extended image given an original image and a prompt.
   *
   * Operation URL: POST /images/edits
   * Operation ID:  createImageEdit
   */
  createImage(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
