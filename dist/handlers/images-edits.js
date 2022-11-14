'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ImagesEdits {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates an edited or extended image given an original image and a prompt.
   *
   * Operation URL: POST /images/edits
   * Operation ID:  createImageEdit
   */
  createImage (data, config) {
    const path = '/images/edits';
    return this.client.request(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['image', 'mask']
      },
      config
    );
  }
}
exports.default = ImagesEdits;
