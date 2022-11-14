import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import Edits from '../../../src/handlers/edits';
import { unitClient, validateRequest } from '../../utils';

describe('Edits test', () => {
  let client: Client;
  let edits: Edits;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    edits = new Edits(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Edits Handler
    expect(edits).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/edits').reply(200, {});
      const promise = edits.create({ model: 'text-davinci-edit-001', instruction: 'Fix the spelling mistakes.' });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty(
        'config.data',
        '{"model":"text-davinci-edit-001","instruction":"Fix the spelling mistakes."}'
      );
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/edits').reply(200, {});
      const response = await edits.create({
        model: 'text-davinci-edit-001',
        instruction: 'Fix the spelling mistakes.'
      });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
