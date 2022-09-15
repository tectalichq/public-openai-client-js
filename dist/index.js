'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const axios_1 = require('axios');
const authentication_1 = require('./authentication');
const client_1 = require('./client');
const baseURL = 'https://api.openai.com/v1';
exports.default = (token) => {
  return new client_1.default((0, authentication_1.default)(token, axios_1.default.create({
    baseURL,
    timeout: 10000
  })));
};
