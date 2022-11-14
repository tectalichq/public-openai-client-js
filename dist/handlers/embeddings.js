'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Embeddings {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates an embedding vector representing the input text.
   *
   * Operation URL: POST /embeddings
   * Operation ID:  createEmbedding
   */
  create (data, config) {
    const path = '/embeddings';
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
exports.default = Embeddings;
