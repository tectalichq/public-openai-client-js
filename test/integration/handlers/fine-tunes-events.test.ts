import { it } from '@jest/globals';
import FineTunesEvents from '../../../src/handlers/fine-tunes-events';
import { integrationClient } from '../../utils';

describe('FineTunesEvents test', () => {
  describe('Integration test for `listFineTune` method', () => {
    it('should validate response', async () => {
      const fineTunesEvents = new FineTunesEvents(integrationClient());
      await fineTunesEvents.listFineTune('ft-AF1WoRqd3aJAHsqc9NY7iL8F', { stream: false });
    });
  });
});
