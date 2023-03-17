import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { resolve } from 'path';
import { Readable } from 'stream';
import auth from '../src/authentication';
import Client, { ClientPromise, ClientRequest } from '../src/client';
import ClientError from '../src/client-error';

const Enforcer = require('openapi-enforcer');

function isError(obj: AxiosResponse | AxiosError): obj is AxiosError {
  return obj.status === undefined;
}
const httpLogger = (axiosResult: AxiosResponse | AxiosError) => {
  const response = isError(axiosResult) ? axiosResult.response : axiosResult;
  if (process.env.OPENAI_CLIENT_TEST_VERBOSE_OUTPUT === 'true') {
    console.log(
      `> Request:  ${axiosResult.request.method}`,
      `${axiosResult.config.baseURL}${axiosResult.config.url}`,
      `\n> Response: ${response?.status}`,
      JSON.stringify(response?.data)
    );
  }
};

class TestClient extends Client {
  request<Data>(request: ClientRequest, config?: AxiosRequestConfig): ClientPromise<Data> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<Data>(this.configRequest(request, config))
        .then((response) => {
          httpLogger(response);
          resolve(response);
        })
        .catch((error) => {
          httpLogger(error);
          reject(new ClientError(error));
        });
    });
  }
}

export const unitClient = () => {
  const axiosInstance = axios.create({ baseURL: 'http://localhost' });
  return {
    axiosInstance,
    client: new Client(axiosInstance),
    mock: new MockAdapter(axiosInstance)
  };
};

export const integrationClient = () => {
  const axiosInstance = axios.create({ baseURL: process.env.OPENAI_CLIENT_TEST_BASE_URI ?? 'http://localhost:4010' });
  return new TestClient(auth(process.env.OPENAI_CLIENT_TEST_AUTH_TOKEN ?? 'token', axiosInstance));
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
