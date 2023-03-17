import { it } from '@jest/globals';
import ChatCompletions from '../../../src/handlers/chat-completions';
import { integrationClient } from '../../utils';

describe('ChatCompletions test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const completions = new ChatCompletions(integrationClient());
      await completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'alpha0'
          }
        ]
      });
    });
  });
});
