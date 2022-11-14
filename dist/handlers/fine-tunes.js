'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class FineTunes {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * List your organization's fine-tuning jobs
   *
   * Operation URL: GET /fine-tunes
   * Operation ID:  listFineTunes
   */
  list (config) {
    const path = '/fine-tunes';
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Creates a job that fine-tunes a specified model from a given dataset.
   * Response includes details of the enqueued job including job status and the name
   * of the fine-tuned models once complete.
   * Learn more about Fine-tuning
   *
   * Operation URL: POST /fine-tunes
   * Operation ID:  createFineTune
   */
  create (data, config) {
    const path = '/fine-tunes';
    return this.client.request(
      {
        method: 'POST',
        path,
        data
      },
      config
    );
  }

  /**
   * Gets info about the fine-tune job.
   * Learn more about Fine-tuning
   *
   * Operation URL: GET /fine-tunes/{fine_tune_id}
   * Operation ID:  retrieveFineTune
   */
  retrieve (fineTuneId, config) {
    const path = `/fine-tunes/${fineTuneId}`;
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }
}
exports.default = FineTunes;
