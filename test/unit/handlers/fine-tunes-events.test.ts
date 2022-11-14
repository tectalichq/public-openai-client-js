import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import FineTunesEvents from '../../../src/handlers/fine-tunes-events';
import { unitClient, validateRequest } from '../../utils';

describe('FineTunesEvents test', () => {
  let client: Client;
  let fineTunesEvents: FineTunesEvents;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    fineTunesEvents = new FineTunesEvents(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // FineTunesEvents Handler
    expect(fineTunesEvents).toHaveProperty('client', client);
  });

  describe('Unit test for `listFineTune` method', () => {
    it('should return promise with basic information', async () => {
      mock.onGet('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/events').reply(200, {});
      const promise = fineTunesEvents.listFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F', { stream: false });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'get');
      await expect(promise).resolves.toHaveProperty('config.url', '/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/events');
      await expect(promise).resolves.toHaveProperty('config.params', { stream: false });
    });

    it('should validate request', async () => {
      mock.onGet('http://localhost/fine-tunes/ft-AF1WoRqd3aJAHsqc9NY7iL8F/events').reply(200, {});
      const response = await fineTunesEvents.listFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
