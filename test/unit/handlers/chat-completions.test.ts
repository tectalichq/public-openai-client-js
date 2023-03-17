import { expect, it } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import Client from '../../../src/client';
import ChatCompletions from '../../../src/handlers/chat-completions';
import { unitClient, validateRequest } from '../../utils';

describe('ChatCompletions test', () => {
  let client: Client;
  let chatCompletions: ChatCompletions;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    chatCompletions = new ChatCompletions(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // Completions Handler
    expect(chatCompletions).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/chat/completions').reply(200, {});
      const promise = chatCompletions.create({
        model: 'davinci',
        messages: [
          {
            role: 'system',
            content: 'alpha0'
          }
        ]
      });
      await expect(promise).resolves.toHaveProperty('status', 200);
      await expect(promise).resolves.toHaveProperty('config.method', 'post');
      await expect(promise).resolves.toHaveProperty(
        'config.data',
        '{"model":"davinci","messages":[{"role":"system","content":"alpha0"}]}'
      );
    });

    it('should validate request', async () => {
      mock.onPost('http://localhost/chat/completions').reply(200, {});
      const response = await chatCompletions.create({
        model: 'davinci',
        messages: [
          {
            role: 'system',
            content: 'alpha0'
          }
        ]
      });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
