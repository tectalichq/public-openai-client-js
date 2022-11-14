'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const axios_1 = __importDefault(require('axios'));
const authentication_1 = __importDefault(require('./authentication'));
const client_1 = __importDefault(require('./client'));
const baseURL = 'https://api.openai.com/v1';
/**
 * Configure and return a new Client instance.
 */
exports.default = (token) => {
  return new client_1.default(
    (0, authentication_1.default)(
      token,
      axios_1.default.create({
        baseURL,
        timeout: 10000
      })
    )
  );
};
