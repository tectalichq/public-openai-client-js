import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import Completions from './handlers/completions';

export interface ClientPromise<Data> extends AxiosPromise<Data> {}

export interface ClientRequest {
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
    request: ClientRequest,
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

  request<Data>(request: ClientRequest, config?: AxiosRequestConfig): ClientPromise<Data> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<Data>(this.#configRequest(request, config))
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
