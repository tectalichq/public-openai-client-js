import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import Moderations from '../../../src/handlers/moderations';
import { unitClient, validateRequest } from '../../utils';

describe('Moderations test', () => {
  let client: Client;
  let moderations: Moderations;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    moderations = new Moderations(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(moderations).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/moderations').reply(200, {});
      const promise = moderations.create({ input: 'string' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.data', '{"input":"string"}');
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/moderations').reply(200, {});
      const response = await moderations.create({ input: 'string' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
