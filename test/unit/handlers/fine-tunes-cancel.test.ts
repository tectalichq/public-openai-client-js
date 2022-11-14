import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import FineTunesCancel from '../../../src/handlers/fine-tunes-cancel';
import { unitClient, validateRequest } from '../../utils';

describe('FineTunesCancel test', () => {
  let client: Client;
  let fineTunesCancel: FineTunesCancel;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    fineTunesCancel = new FineTunesCancel(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // FineTunesCancel Handler
    expect(fineTunesCancel).toHaveProperty('client', client);
  });

  describe('Unit test for `cancelFineTune` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/cancel').reply(200, {});
      const promise = fineTunesCancel.cancelFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.url', '/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/cancel');
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/cancel').reply(200, {});
      const response = await fineTunesCancel.cancelFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
