import { it } from '@jest/globals';
import Completions from '../../../src/handlers/completions';
import { integrationClient } from '../../utils';

describe('Completions test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const completions = new Completions(integrationClient());
      await completions.create({ model: 'davinci' });
    });
  });
});
