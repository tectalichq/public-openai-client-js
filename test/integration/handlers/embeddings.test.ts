import { it } from '@jest/globals';
import Embeddings from '../../../src/handlers/embeddings';
import { integrationClient } from '../../utils';

describe('Embeddings test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const embeddings = new Embeddings(integrationClient());
      await embeddings.create({
        model: 'text-similarity-babbage-001',
        input: 'The quick brown fox jumped over the lazy dog'
      });
    });
  });
});
