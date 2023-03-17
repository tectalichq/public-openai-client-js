'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class AudioTranscriptions {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Transcribes audio into the input language.
   *
   * Operation URL: POST /audio/transcriptions
   * Operation ID:  createTranscription
   */
  create (data, config) {
    const path = '/audio/transcriptions';
    return this.client.request(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['file']
      },
      config
    );
  }
}
exports.default = AudioTranscriptions;
