'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ClientError extends Error {
  constructor (message) {
    super(message);
    this.name = 'ClientError';
  }
}
exports.default = ClientError;
