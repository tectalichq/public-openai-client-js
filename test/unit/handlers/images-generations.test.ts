import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import ImagesGenerations from '../../../src/handlers/images-generations';
import { unitClient, validateRequest } from '../../utils';

describe('ImagesGenerations test', () => {
  let client: Client;
  let imagesGenerations: ImagesGenerations;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    imagesGenerations = new ImagesGenerations(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // ImagesGenerations Handler
    expect(imagesGenerations).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/images/generations').reply(200, {});
      const promise = imagesGenerations.create({ prompt: 'A cute baby sea otter' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.data', '{"prompt":"A cute baby sea otter"}');
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/images/generations').reply(200, {});
      const response = await imagesGenerations.create({ prompt: 'A cute baby sea otter' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
