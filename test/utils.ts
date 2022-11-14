import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { resolve } from 'path';
import { Readable } from 'stream';
import auth from '../src/authentication';
import Client from '../src/client';

const Enforcer = require('openapi-enforcer');

export const unitClient = () => {
  const axiosInstance = axios.create({ baseURL: 'http://localhost' });
  return {
    axiosInstance,
    client: new Client(axiosInstance),
    mock: new MockAdapter(axiosInstance)
  };
};

export const integrationClient = () => {
  const axiosInstance = axios.create({ baseURL: 'http://localhost:4010' });
  return new Client(auth('token', axiosInstance));
};

const createValidationRequest = (config: AxiosRequestConfig) => {
  const body = !config.data ? undefined : typeof config.data === 'string' ? JSON.parse(config.data) : config.data;

  const request = {
    method: config.method,
    path: config.url || '',
    ...(config.headers ? { headers: config.headers } : {}),
    ...(config.params ? { query: config.params } : {})
  };
  if (body) {
    // @ts-ignore: TS2339 - body added dynamically
    request.body = body;
  }
  return request;
};

export const validateRequest = async (config: AxiosRequestConfig) => {
  const options = {
    hideWarnings: true
  };
  const validator = await Enforcer(resolve(__dirname, './openapi.yaml'), options);
  const request = createValidationRequest(config);
  const [, err] = validator.request(request);
  return err;
};

export const mockReadStream = jest.fn().mockImplementation(() => {
  const stream = new Readable();
  stream.push('{"prompt": "<prompt text>", "completion": "<ideal generated text>"}' + '\n');
  stream.push('{"prompt": "<prompt text>", "completion": "<ideal generated text>"}' + '\n');
  stream.push('{"prompt": "<prompt text>", "completion": "<ideal generated text>"}' + '\n');
  stream.push(null);

  return stream;
});
