import { it } from '@jest/globals';
import Edits from '../../../src/handlers/edits';
import { integrationClient } from '../../utils';

describe('Edits test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const edits = new Edits(integrationClient());
      await edits.create({ model: 'text-davinci-edit-001', instruction: 'Fix the spelling mistakes.' });
    });
  });
});
