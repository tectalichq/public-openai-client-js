'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class FineTunesCancel {
  constructor (Client) {
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
  cancelFineTune (fineTuneId, config) {
    const path = `/fine-tunes/${fineTuneId}/cancel`;
    return this.client.request(
      {
        method: 'POST',
        path
      },
      config
    );
  }
}
exports.default = FineTunesCancel;
