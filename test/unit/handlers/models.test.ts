import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import Models from '../../../src/handlers/models';
import { unitClient, validateRequest } from '../../utils';

describe('Models test', () => {
  let client: Client;
  let models: Models;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    models = new Models(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Models Handler
    expect(models).toHaveProperty('client', client);
  });

  describe('Unit test for `list` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/models').reply(200, {});
      const promise = models.list();
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/models').reply(200, {});
      const response = await models.list();
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `retrieve` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/models/text-davinci-002').reply(200, {});
      const promise = models.retrieve('text-davinci-002');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.url', '/models/text-davinci-002');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/models/text-davinci-002').reply(200, {});
      const response = await models.retrieve('text-davinci-002');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `delete` method', () => {
    it('should return promise with basic information', async () => {
      mock.onDelete('http://localhost/models/text-davinci-002').reply(200, {});
      const promise = models.delete('text-davinci-002');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'delete');
      await expect(promise).resolves.toHaveProperty('config.url', '/models/text-davinci-002');
      await expect(promise).resolves.toHaveProperty('config.data', undefined);
    });

    it('should validate request', async () => {
      mock.onDelete('http://localhost/models/text-davinci-002').reply(200, {});
      const response = await models.delete('text-davinci-002');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
