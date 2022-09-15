'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Completions {
  constructor (Client) {
    this.client = Client;
  }

  create (data, config) {
    const path = '/completions';
    return this.client.request({
      method: 'POST',
      path,
      data
    }, config);
  }
}
exports.default = Completions;
