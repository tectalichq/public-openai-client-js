'use strict';
const __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, state, kind, f) {
    if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter');
    if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver)) { throw new TypeError('Cannot read private member from an object whose class did not declare it'); }
    return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
let _instances, _encodeBody, _includeInHeader, _mergeHeaders, _configRequest;
Object.defineProperty(exports, '__esModule', { value: true });
const form_data_1 = __importDefault(require('form-data'));
const fs_1 = require('fs');
const path_1 = __importDefault(require('path'));
const qs_1 = __importDefault(require('qs'));
const client_error_1 = __importDefault(require('./client-error'));
const completions_1 = __importDefault(require('./handlers/completions'));
const edits_1 = __importDefault(require('./handlers/edits'));
const embeddings_1 = __importDefault(require('./handlers/embeddings'));
const files_1 = __importDefault(require('./handlers/files'));
const files_content_1 = __importDefault(require('./handlers/files-content'));
const fine_tunes_1 = __importDefault(require('./handlers/fine-tunes'));
const fine_tunes_cancel_1 = __importDefault(require('./handlers/fine-tunes-cancel'));
const fine_tunes_events_1 = __importDefault(require('./handlers/fine-tunes-events'));
const images_edits_1 = __importDefault(require('./handlers/images-edits'));
const images_generations_1 = __importDefault(require('./handlers/images-generations'));
const images_variations_1 = __importDefault(require('./handlers/images-variations'));
const models_1 = __importDefault(require('./handlers/models'));
const moderations_1 = __importDefault(require('./handlers/moderations'));
/**
 * Holds and interacts with the Axios Client.
 */
class default_1 {
  constructor (instance) {
    _instances.add(this);
    /**
     * Access to the Completions handler.
     */
    this.completions = new completions_1.default(this);
    /**
     * Access to the Edits handler.
     */
    this.edits = new edits_1.default(this);
    /**
     * Access to the Embeddings handler.
     */
    this.embeddings = new embeddings_1.default(this);
    /**
     * Access to the Files handler.
     */
    this.files = new files_1.default(this);
    /**
     * Access to the FilesContent handler.
     */
    this.filesContent = new files_content_1.default(this);
    /**
     * Access to the FineTunes handler.
     */
    this.fineTunes = new fine_tunes_1.default(this);
    /**
     * Access to the FineTunesCancel handler.
     */
    this.fineTunesCancel = new fine_tunes_cancel_1.default(this);
    /**
     * Access to the FineTunesEvents handler.
     */
    this.fineTunesEvents = new fine_tunes_events_1.default(this);
    /**
     * Access to the ImagesEdits handler.
     */
    this.imagesEdits = new images_edits_1.default(this);
    /**
     * Access to the ImagesGenerations handler.
     */
    this.imagesGenerations = new images_generations_1.default(this);
    /**
     * Access to the ImagesVariations handler.
     */
    this.imagesVariations = new images_variations_1.default(this);
    /**
     * Access to the Models handler.
     */
    this.models = new models_1.default(this);
    /**
     * Access to the Moderations handler.
     */
    this.moderations = new moderations_1.default(this);
    this.instance = instance;
  }

  /**
   * Perform the specified HTTP request.
   */
  request (request, config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(__classPrivateFieldGet(this, _instances, 'm', _configRequest).call(this, request, config))
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(new client_error_1.default(error));
        });
    });
  }
}
exports.default = default_1;
(_instances = new WeakSet()),
(_encodeBody = function _encodeBody (request, config) {
  let _a;
  if (!config.headers || !config.headers['Content-Type']) {
    throw new client_error_1.default('Unable to encode body. Content-Type request header must be set.');
  }
  const contentType = config.headers['Content-Type'].toString();
  if (contentType.includes('application/json')) {
    return request.data;
  }
  if (contentType.includes('application/x-www-form-urlencoded')) {
    return qs_1.default.stringify(request.data);
  }
  if (contentType.includes('multipart/form-data')) {
    const form = new form_data_1.default();
    for (const field in request.data) {
      if (
        Object.prototype.hasOwnProperty.call(request.data, field) &&
          ((_a = request.uploads) === null || _a === void 0 ? void 0 : _a.includes(field))
      ) {
        const stream = (0, fs_1.createReadStream)(request.data[field]);
        stream.on('error', function (err) {
          throw new client_error_1.default(err);
        });
        form.append(field, stream, { filename: path_1.default.basename(request.data[field]) });
        continue;
      }
      const value = Array.isArray(request.data[field]) ? JSON.stringify(request.data[field]) : request.data[field];
      form.append(field, value);
    }
    return form;
  }
  throw new client_error_1.default(`Unexpected Content-Type header value: ${contentType}`);
}),
(_includeInHeader = function _includeInHeader (key, headers) {
  const headerKeys = Object.keys(headers).reduce((keys, key) => {
    keys[key.toLowerCase()] = key;
    return keys;
  }, {});
  if (Object.keys(headerKeys).includes(key.toLowerCase())) {
    return headerKeys[key.toLowerCase()];
  }
  return false;
}),
(_mergeHeaders = function _mergeHeaders (targetHeader, sourceHeader) {
  if (
    !targetHeader['User-Agent'] &&
      !__classPrivateFieldGet(this, _instances, 'm', _includeInHeader).call(this, 'User-Agent', sourceHeader)
  ) {
    // User-Agent is Tectalic OpenAI REST API Client by default.
    targetHeader['User-Agent'] = 'Tectalic OpenAI REST API Client';
  }
  if (
    !targetHeader['Content-Type'] &&
      !__classPrivateFieldGet(this, _instances, 'm', _includeInHeader).call(this, 'Content-Type', sourceHeader)
  ) {
    // Content type is application/json by default.
    targetHeader['Content-Type'] = 'application/json';
  }
  for (const headerKey of Object.keys(sourceHeader)) {
    if (!targetHeader[headerKey]) {
      // If lowercase matches use keys from targetHeader.
      const targetKey =
          __classPrivateFieldGet(this, _instances, 'm', _includeInHeader).call(this, headerKey, targetHeader) ||
          headerKey;
      targetHeader[targetKey] = sourceHeader[headerKey];
    }
  }
  return targetHeader;
}),
(_configRequest = function _configRequest (request, config) {
  if (!config) {
    config = {};
  }
  config.url = request.path;
  config.method = request.method;
  // HTTP Parameters.
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
  // Merge Headers.
  if (!config.headers) {
    config.headers = {};
  }
  if (!request.headers) {
    request.headers = {};
  }
  config.headers = __classPrivateFieldGet(this, _instances, 'm', _mergeHeaders).call(
    this,
    config.headers,
    request.headers
  );
  // Request Body.
  config.data = __classPrivateFieldGet(this, _instances, 'm', _encodeBody).call(this, request, config);
  if (config.data instanceof form_data_1.default) {
    config.headers = __classPrivateFieldGet(this, _instances, 'm', _mergeHeaders).call(
      this,
      config.headers,
      config.data.getHeaders()
    );
  }
  return config;
});
