import { expect, it } from '@jest/globals';
import Completions from '../src/handlers/completions';
import mockClient from './mock-client';

describe('Client test', () => {
  let axiosInstance;
  let client;
  let mock;

  beforeEach(() => {
    ({ axiosInstance, client, mock } = mockClient());
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(client).toHaveProperty('completions');
    expect(client.completions).toBeInstanceOf(Completions);
    // Axios instance
    expect(client).toHaveProperty('instance', axiosInstance);
  });

  describe('When call `request` method', () => {
    it('should call include basic information', async () => {
      mock.onGet('http://localhost/request').reply(201, {});
      const promise = client.request({ method: 'GET', path: '/request' });
      await expect(promise).resolves.toHaveProperty('status', 201);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('data', {});
      await expect(promise).resolves.not.toHaveProperty('config.params');
      await expect(promise).resolves.toHaveProperty(
        'config.headers.User-Agent',
        'Tectalic OpenAI REST API Client'
      );
    });

    it('should URL params included', async () => {
      mock
        .onGet('http://localhost/request', { params: { a: 'a' } })
        .reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        params: { a: 'a' },
      });
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'a',
      });
    });

    it('should URL params merge with config', async () => {
      mock
        .onGet('http://localhost/request', { params: { a: 'a', b: 'b' } })
        .reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          params: { a: 'a' },
        },
        { params: { b: 'b' } }
      );
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'a',
        b: 'b',
      });
    });

    it('should config overwrite URL params', async () => {
      mock
        .onGet('http://localhost/request', { params: { a: 'b' } })
        .reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          params: { a: 'a' },
        },
        { params: { a: 'b' } }
      );
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'b',
      });
    });

    it('should Headers included', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        headers: { 'x-test': 'test' },
      });
      await expect(promise).resolves.toHaveProperty(
        'config.headers.x-test',
        'test'
      );
    });

    it('should headers merge with config', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          headers: { 'x-test': 'test' },
        },
        { headers: { 'x-alternative': 'alternative' } }
      );
      await expect(promise).resolves.toHaveProperty(
        'config.headers.x-test',
        'test'
      );
      await expect(promise).resolves.toHaveProperty(
        'config.headers.x-alternative',
        'alternative'
      );
    });

    it('should config overwrite headers', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          headers: { 'x-test': 'test' },
        },
        { headers: { 'x-test': 'alternative' } }
      );
      await expect(promise).resolves.toHaveProperty(
        'config.headers.x-test',
        'alternative'
      );
    });

    it('should data added', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        data: { sample: 'data' },
      });
      await expect(promise).resolves.toHaveProperty(
        'config.data',
        '{"sample":"data"}'
      );
    });

    it('should config data ignored', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
        },
        { data: { sample: 'data' } }
      );
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });
  });
});
