import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/fine-tunes/create-request';
import CreateResponse from '../models/fine-tunes/create-response';
import ListResponse from '../models/fine-tunes/list-response';
import RetrieveResponse from '../models/fine-tunes/retrieve-response';
export default class FineTunes {
  client: Client;
  constructor(Client: Client);
  /**
   * List your organization's fine-tuning jobs
   *
   * Operation URL: GET /fine-tunes
   * Operation ID:  listFineTunes
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse>;
  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   * Response includes details of the enqueued job including job status and the name
   * of the fine-tuned models once complete.
   * Learn more about Fine-tuning
   *
   * Operation URL: POST /fine-tunes
   * Operation ID:  createFineTune
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
  /**
   * Gets info about the fine-tune job.
   * Learn more about Fine-tuning
   *
   * Operation URL: GET /fine-tunes/{fine_tune_id}
   * Operation ID:  retrieveFineTune
   */
  retrieve(fineTuneId: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse>;
}
