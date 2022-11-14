import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import ListResponse from '../models/models/list-response';
import RetrieveResponse from '../models/models/retrieve-response';
import DeleteResponse from '../models/models/delete-response';

export default class Models {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   *
   * Operation URL: GET /models
   * Operation ID:  listModels
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse> {
    const path = '/models';
    return this.client.request<ListResponse>(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Retrieves a model instance, providing basic information about the model such as
   * the owner and permissioning.
   *
   * Operation URL: GET /models/{model}
   * Operation ID:  retrieveModel
   *
   * @param model The ID of the model to use for this request
   */
  retrieve(model: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse> {
    const path = `/models/${model}`;
    return this.client.request<RetrieveResponse>(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Delete a fine-tuned model. You must have the Owner role in your organization.
   *
   * Operation URL: DELETE /models/{model}
   * Operation ID:  deleteModel
   *
   * @param model The model to delete
   */
  delete(model: string, config?: AxiosRequestConfig): ClientPromise<DeleteResponse> {
    const path = `/models/${model}`;
    return this.client.request<DeleteResponse>(
      {
        method: 'DELETE',
        path
      },
      config
    );
  }
}
