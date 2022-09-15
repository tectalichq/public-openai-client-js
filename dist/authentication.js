'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = (token, instance) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return instance;
};
