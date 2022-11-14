import { it } from '@jest/globals';
import FineTunesCancel from '../../../src/handlers/fine-tunes-cancel';
import { integrationClient } from '../../utils';

describe('FineTunesCancel test', () => {
  describe('Integration test for `cancelFineTune` method', () => {
    it('should validate response', async () => {
      const fineTunesCancel = new FineTunesCancel(integrationClient());
      await fineTunesCancel.cancelFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
    });
  });
});
