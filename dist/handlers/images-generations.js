'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ImagesGenerations {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates an image given a prompt.
   *
   * Operation URL: POST /images/generations
   * Operation ID:  createImage
   */
  create (data, config) {
    const path = '/images/generations';
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
exports.default = ImagesGenerations;
