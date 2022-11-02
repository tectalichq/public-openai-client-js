'use strict';
const __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
  if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
  if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
};
let _instances, _configRequest;
Object.defineProperty(exports, '__esModule', { value: true });
const completions_1 = require('./handlers/completions');
class default_1 {
  constructor (instance) {
    _instances.add(this);
    this.completions = new completions_1.default(this);
    this.instance = instance;
  }

  request (request, config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(__classPrivateFieldGet(this, _instances, 'm', _configRequest).call(this, request, config))
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
exports.default = default_1;
_instances = new WeakSet(), _configRequest = function _configRequest (request, config) {
  if (!config) {
    config = {};
  }
  config.url = request.path;
  config.method = request.method;
  if (request.params) {
    if (!config.params) {
      config.params = {};
    }
    for (const param of Object.keys(request.params)) {
      if (!config.params[param]) {
        config.params[param] = request.params[param];
      }
    }
  }
  if (!request.headers) {
    request.headers = {};
  }
  request.headers['User-Agent'] = 'Tectalic OpenAI REST API Client';
  if (!config.headers) {
    config.headers = {};
  }
  for (const header of Object.keys(request.headers)) {
    if (!config.headers[header]) {
      config.headers[header] = request.headers[header];
    }
  }
  config.data = request.data;
  return config;
};
