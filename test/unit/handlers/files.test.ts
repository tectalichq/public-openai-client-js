import { expect, it, jest } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import FormData from 'form-data';
import fs from 'fs';
import Client from '../../../src/client';
import Files from '../../../src/handlers/files';
import { mockReadStream, unitClient, validateRequest } from '../../utils';

describe('Files test', () => {
  let client: Client;
  let files: Files;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    files = new Files(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Files Handler
    expect(files).toHaveProperty('client', client);
  });

  describe('Unit test for `list` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/files').reply(200, {});
      const promise = files.list();
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/files').reply(200, {});
      const response = await files.list();
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `create` method', () => {
    // set up mock for axios.get
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());

    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/files').reply(200, {});
      const result = await files.create({ file: 'path/file', purpose: 'fine-tune' });
      expect(result.status).toBe(200);
      expect(result.config.method).toBe('post');
      expect(result.config.headers).toHaveProperty('Content-Type');
      // @ts-ignore TS2532: Object is possibly 'undefined'.
      expect(result.config.headers['Content-Type']).toContain('multipart/form-data; boundary');
      expect(result.config.data).toBeInstanceOf(FormData);
    });

    it.skip('should validate request', async () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    mock.onPost('http://localhost/files').reply(200, {});
      const response = await files.create({ file: 'path/file,jsonl', purpose: 'fine-tune' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `retrieve` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/files/string').reply(200, {});
      const promise = files.retrieve('string');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
      await expect(promise).resolves.toHaveProperty('config.url', '/files/string');
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/files/string').reply(200, {});
      const response = await files.retrieve('string');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `delete` method', () => {
    it('should return promise with basic information', async () => {
      mock.onDelete('http://localhost/files/string').reply(200, {});
      const promise = files.delete('string');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'delete');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
      await expect(promise).resolves.toHaveProperty('config.url', '/files/string');
    });

    it('should validate request', async () => {
      mock.onDelete('http://localhost/files/string').reply(200, {});
      const response = await files.delete('string');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
