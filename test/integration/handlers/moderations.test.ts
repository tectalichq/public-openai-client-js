import { it } from '@jest/globals';
import Moderations from '../../../src/handlers/moderations';
import { integrationClient } from '../../utils';

describe('Moderations test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const moderations = new Moderations(integrationClient());
      await moderations.create({ input: 'string' });
    });
  });
});
