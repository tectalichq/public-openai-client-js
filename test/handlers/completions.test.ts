import { expect, it } from '@jest/globals';
import Completions from '../../src/handlers/completions';
import mockClient from '../mock-client';

describe('Completions test', () => {
  let client;
  let completions;
  let mock;

  beforeEach(() => {
    ({ client: client, mock: mock } = mockClient());
    completions = new Completions(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(completions).toHaveProperty('client', client);
  });

  describe('When call `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/completions').reply(200, {});
      const promise = completions.create({ model: 'davinci' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty('config.data', '{"model":"davinci"}');
    });
  });
});
