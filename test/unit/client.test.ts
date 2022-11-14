import { expect, it } from '@jest/globals';
import Client from '../../src/client';
import Completions from '../../src/handlers/completions';
import Edits from '../../src/handlers/edits';
import Embeddings from '../../src/handlers/embeddings';
import Files from '../../src/handlers/files';
import FilesContent from '../../src/handlers/files-content';
import FineTunes from '../../src/handlers/fine-tunes';
import FineTunesCancel from '../../src/handlers/fine-tunes-cancel';
import FineTunesEvents from '../../src/handlers/fine-tunes-events';
import ImagesEdits from '../../src/handlers/images-edits';
import ImagesGenerations from '../../src/handlers/images-generations';
import ImagesVariations from '../../src/handlers/images-variations';
import MockAdapter from 'axios-mock-adapter';
import Models from '../../src/handlers/models';
import Moderations from '../../src/handlers/moderations';
import { unitClient } from '../utils';
import { AxiosInstance } from 'axios';

describe('Client test', () => {
  let axiosInstance: AxiosInstance;
  let client: Client;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ axiosInstance, client, mock } = unitClient());
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(client).toHaveProperty('completions');
    expect(client.completions).toBeInstanceOf(Completions);
    // Edits Handler
    expect(client).toHaveProperty('edits');
    expect(client.edits).toBeInstanceOf(Edits);
    // Embeddings Handler
    expect(client).toHaveProperty('embeddings');
    expect(client.embeddings).toBeInstanceOf(Embeddings);
    // Files Handler
    expect(client).toHaveProperty('files');
    expect(client.files).toBeInstanceOf(Files);
    // FilesContent Handler
    expect(client).toHaveProperty('filesContent');
    expect(client.filesContent).toBeInstanceOf(FilesContent);
    // FineTunes Handler
    expect(client).toHaveProperty('fineTunes');
    expect(client.fineTunes).toBeInstanceOf(FineTunes);
    // FineTunesCancel Handler
    expect(client).toHaveProperty('fineTunesCancel');
    expect(client.fineTunesCancel).toBeInstanceOf(FineTunesCancel);
    // FineTunesEvents Handler
    expect(client).toHaveProperty('fineTunesEvents');
    expect(client.fineTunesEvents).toBeInstanceOf(FineTunesEvents);
    // ImagesGenerations Handler
    expect(client).toHaveProperty('imagesGenerations');
    expect(client.imagesGenerations).toBeInstanceOf(ImagesGenerations);
    // ImagesEdits Handler
    expect(client).toHaveProperty('imagesEdits');
    expect(client.imagesEdits).toBeInstanceOf(ImagesEdits);
    // ImagesVariations Handler
    expect(client).toHaveProperty('imagesVariations');
    expect(client.imagesVariations).toBeInstanceOf(ImagesVariations);
    // Models Handler
    expect(client).toHaveProperty('models');
    expect(client.models).toBeInstanceOf(Models);
    // Moderations Handler
    expect(client).toHaveProperty('moderations');
    expect(client.moderations).toBeInstanceOf(Moderations);
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
      await expect(promise).resolves.toHaveProperty('config.headers.User-Agent', 'Tectalic OpenAI REST API Client');
      await expect(promise).resolves.toHaveProperty('config.headers.Content-Type', 'application/json');
    });

    it('should URL params included', async () => {
      mock.onGet('http://localhost/request', { params: { a: 'a' } }).reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        params: { a: 'a' }
      });
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'a'
      });
    });

    it('should URL params merge with config', async () => {
      mock.onGet('http://localhost/request', { params: { a: 'a', b: 'b' } }).reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          params: { a: 'a' }
        },
        { params: { b: 'b' } }
      );
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'a',
        b: 'b'
      });
    });

    it('should config overwrite URL params', async () => {
      mock.onGet('http://localhost/request', { params: { a: 'b' } }).reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          params: { a: 'a' }
        },
        { params: { a: 'b' } }
      );
      await expect(promise).resolves.toHaveProperty('config.params', {
        a: 'b'
      });
    });

    it('should Headers included', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        headers: { 'x-test': 'test' }
      });
      await expect(promise).resolves.toHaveProperty('config.headers.x-test', 'test');
    });

    it('should headers merge with config', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          headers: { 'x-test': 'test' }
        },
        { headers: { 'x-alternative': 'alternative' } }
      );
      await expect(promise).resolves.toHaveProperty('config.headers.x-test', 'test');
      await expect(promise).resolves.toHaveProperty('config.headers.x-alternative', 'alternative');
    });

    it('should config overwrite headers', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request',
          headers: { 'x-test': 'test' }
        },
        { headers: { 'x-test': 'alternative' } }
      );
      await expect(promise).resolves.toHaveProperty('config.headers.x-test', 'alternative');
    });

    it('should data added', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        data: { sample: 'data' }
      });
      await expect(promise).resolves.toHaveProperty('config.data', '{"sample":"data"}');
    });

    it('should error with unsupported content type', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request({
        method: 'GET',
        path: '/request',
        data: { sample: 'data' },
        headers: { 'Content-Type': 'text/plain' }
      });
      expect.assertions(2);
      return promise.catch((err: Error) => {
        expect(err.name).toEqual('ClientError');
        expect(err.message).toEqual('Unexpected Content-Type header value: text/plain');
      });
    });

    it('should config data ignored', async () => {
      mock.onGet('http://localhost/request').reply(200, {});
      const promise = client.request(
        {
          method: 'GET',
          path: '/request'
        },
        { data: { sample: 'data' } }
      );
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });

    it('should promise rejected on http error', () => {
      mock.onGet('http://localhost/request').reply(400, {});
      const promise = client.request({ method: 'GET', path: '/request' });
      expect.assertions(3);
      return promise.catch((err: Error) => {
        expect(err.name).toEqual('ClientError');
        expect(err.message).toEqual('Request failed with status code 400');
        expect(err.stack).toEqual(expect.stringContaining('AxiosError'));
      });
    });
  });
});
