import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Completions from './handlers/completions';

export type Response = Promise<AxiosResponse<any, any>>;
export interface Request {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  path: string;
  data?: object;
  headers?: Record<string, string | number | boolean>;
  params?: Record<string, any>;
}

export default class {
  instance: AxiosInstance;

  completions = new Completions(this);

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  #configRequest(
    request: Request,
    config?: AxiosRequestConfig
  ): AxiosRequestConfig {
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
  }

  request(request: Request, config?: AxiosRequestConfig): Response {
    return this.instance.request(this.#configRequest(request, config));
  }
}
