'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Models {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Lists the currently available models, and provides basic information about each
   * one such as the owner and availability.
   *
   * Operation URL: GET /models
   * Operation ID:  listModels
   */
  list (config) {
    const path = '/models';
    return this.client.request(
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
  retrieve (model, config) {
    const path = `/models/${model}`;
    return this.client.request(
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
  delete (model, config) {
    const path = `/models/${model}`;
    return this.client.request(
      {
        method: 'DELETE',
        path
      },
      config
    );
  }
}
exports.default = Models;
