import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/edits/create-request';
import CreateResponse from '../models/edits/create-response';
export default class Edits {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a new edit for the provided input, instruction, and parameters
   *
   * Operation URL: POST /edits
   * Operation ID:  createEdit
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
