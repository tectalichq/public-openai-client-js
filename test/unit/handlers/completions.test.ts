import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import Completions from '../../../src/handlers/completions';
import { unitClient, validateRequest } from '../../utils';

describe('Completions test', () => {
  let client: Client;
  let completions: Completions;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    completions = new Completions(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(completions).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/completions').reply(200, {});
      const promise = completions.create({ model: 'davinci' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.data', '{"model":"davinci"}');
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/completions').reply(200, {});
      const response = await completions.create({ model: 'davinci' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
