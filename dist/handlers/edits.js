'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Edits {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates a new edit for the provided input, instruction, and parameters
   *
   * Operation URL: POST /edits
   * Operation ID:  createEdit
   */
  create (data, config) {
    const path = '/edits';
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
exports.default = Edits;
