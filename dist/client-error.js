'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const axios_1 = require('axios');
class ClientError extends axios_1.AxiosError {
  constructor (from) {
    const message = from instanceof Error ? from.message : from;
    super(message);
    this.name = 'ClientError';
    if (from instanceof Error) {
      this.stack = from.stack;
    }
    if (from instanceof axios_1.AxiosError) {
      this.code = from.code;
      this.config = from.config;
      this.request = from.request;
      this.response = from.response;
    }
  }
}
exports.default = ClientError;
