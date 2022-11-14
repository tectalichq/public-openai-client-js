import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CancelFineTuneResponse from '../models/fine-tunes-cancel/cancel-fine-tune-response';

export default class FineTunesCancel {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Immediately cancel a fine-tune job.
   *
   * Operation URL: POST /fine-tunes/{fine_tune_id}/cancel
   * Operation ID:  cancelFineTune
   *
   * @param fineTuneId The ID of the fine-tune job to cancel
   */
  cancelFineTune(fineTuneId: string, config?: AxiosRequestConfig): ClientPromise<CancelFineTuneResponse> {
    const path = `/fine-tunes/${fineTuneId}/cancel`;
    return this.client.request<CancelFineTuneResponse>(
      {
        method: 'POST',
        path
      },
      config
    );
  }
}
