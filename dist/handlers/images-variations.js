'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ImagesVariations {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates a variation of a given image.
   *
   * Operation URL: POST /images/variations
   * Operation ID:  createImageVariation
   */
  createImage (data, config) {
    const path = '/images/variations';
    return this.client.request(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['image']
      },
      config
    );
  }
}
exports.default = ImagesVariations;
