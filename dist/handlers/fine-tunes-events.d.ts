import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import ListFineTuneResponse from '../models/fine-tunes-events/list-fine-tune-response';
export default class FineTunesEvents {
  client: Client;
  constructor(Client: Client);
  /**
   * Get fine-grained status updates for a fine-tune job.
   *
   * Operation URL: GET /fine-tunes/{fine_tune_id}/events
   * Operation ID:  listFineTuneEvents
   *
   * @param fineTuneId The ID of the fine-tune job to get events for.
   * @param params
   * - stream:  Whether to stream events for the fine-tune job. If set to true,
   *   events will be sent as data-only
   *   server-sent events
   *   as they become available. The stream will terminate with a
   *   data: [DONE] message when the job is finished (succeeded, cancelled,
   *   or failed).
   *   If set to false, only events generated so far will be returned.
   */
  listFineTune(fineTuneId: string, params?: Object, config?: AxiosRequestConfig): ClientPromise<ListFineTuneResponse>;
}
