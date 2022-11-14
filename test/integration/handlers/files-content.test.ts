import { it } from '@jest/globals';
import FilesContent from '../../../src/handlers/files-content';
import { integrationClient } from '../../utils';

describe('FilesContent test', () => {
  describe('Integration test for `download` method', () => {
    it('should validate response', async () => {
      const completions = new FilesContent(integrationClient());
      await completions.download('string');
    });
  });
});
