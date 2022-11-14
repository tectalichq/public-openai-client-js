import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import FilesContent from '../../../src/handlers/files-content';
import { unitClient, validateRequest } from '../../utils';

describe('FilesContent test', () => {
  let client: Client;
  let filesContent: FilesContent;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    filesContent = new FilesContent(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // FilesContent Handler
    expect(filesContent).toHaveProperty('client', client);
  });

  describe('Unit test for `download` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/files/string/content').reply(200, {});
      const promise = filesContent.download('string');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.url', '/files/string/content');
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/files/string/content').reply(200, {});
      const response = await filesContent.download('string');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
