'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Implement HTTP Bearer Authentication.
 */
exports.default = (token, instance) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return instance;
};
