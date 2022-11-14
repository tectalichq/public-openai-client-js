import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/embeddings/create-request';
import CreateResponse from '../models/embeddings/create-response';
export default class Embeddings {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates an embedding vector representing the input text.
   *
   * Operation URL: POST /embeddings
   * Operation ID:  createEmbedding
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
