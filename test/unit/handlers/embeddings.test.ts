import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import Embeddings from '../../../src/handlers/embeddings';
import { unitClient, validateRequest } from '../../utils';

describe('Embeddings test', () => {
  let client: Client;
  let embeddings: Embeddings;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    embeddings = new Embeddings(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Embeddings Handler
    expect(embeddings).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/embeddings').reply(200, {});
      const promise = embeddings.create({
        model: 'text-similarity-babbage-001',
        input: 'The quick brown fox jumped over the lazy dog'
      });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty(
        'config.data',
        '{"model":"text-similarity-babbage-001","input":"The quick brown fox jumped over the lazy dog"}'
      );
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/embeddings').reply(200, {});
      const response = await embeddings.create({
        model: 'davinci',
        input: 'The quick brown fox jumped over the lazy dog'
      });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
