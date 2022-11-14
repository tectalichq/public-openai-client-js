import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import FineTunes from '../../../src/handlers/fine-tunes';
import { unitClient, validateRequest } from '../../utils';

describe('FineTunes test', () => {
  let client: Client;
  let fineTunes: FineTunes;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    fineTunes = new FineTunes(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // FineTunes Handler
    expect(fineTunes).toHaveProperty('client', client);
  });

  describe('Unit test for `list` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/fine-tunes').reply(200, {});
      const promise = fineTunes.list();
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/fine-tunes').reply(200, {});
      const response = await fineTunes.list();
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/fine-tunes').reply(200, {});
      const promise = fineTunes.create({ training_file: 'file-ajSREls59WBbvgSzJSVWxMCB' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.data', '{"training_file":"file-ajSREls59WBbvgSzJSVWxMCB"}');
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/fine-tunes').reply(200, {});
      const response = await fineTunes.create({ training_file: 'file-ajSREls59WBbvgSzJSVWxMCB' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });

  describe('Unit test for `retrieve` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F').reply(200, {});
      const promise = fineTunes.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.url', '/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F');
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F').reply(200, {});
      const response = await fineTunes.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
