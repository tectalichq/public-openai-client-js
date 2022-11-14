'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Moderations {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Classifies if text violates OpenAI's Content Policy
   *
   * Operation URL: POST /moderations
   * Operation ID:  createModeration
   */
  create (data, config) {
    const path = '/moderations';
    return this.client.request(
      {
        method: 'POST',
        path,
        data
      },
      config
    );
  }
}
exports.default = Moderations;
