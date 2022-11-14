import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/moderations/create-request';
import CreateResponse from '../models/moderations/create-response';
export default class Moderations {
  client: Client;
  constructor(Client: Client);
  /**
   * Classifies if text violates OpenAI's Content Policy
   *
   * Operation URL: POST /moderations
   * Operation ID:  createModeration
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
