'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class AudioTranslations {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Translates audio into into English.
   *
   * Operation URL: POST /audio/translations
   * Operation ID:  createTranslation
   */
  create (data, config) {
    const path = '/audio/translations';
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
exports.default = AudioTranslations;
