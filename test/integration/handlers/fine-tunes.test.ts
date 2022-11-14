import { it } from '@jest/globals';
import FineTunes from '../../../src/handlers/fine-tunes';
import { integrationClient } from '../../utils';

describe('FineTunes test', () => {
  describe('Integration test for `list` method', () => {
    it('should validate response', async () => {
      const fineTunes = new FineTunes(integrationClient());
      await fineTunes.list();
    });
  });

  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const fineTunes = new FineTunes(integrationClient());
      await fineTunes.create({ training_file: 'file-ajSREls59WBbvgSzJSVWxMCB' });
    });
  });

  describe('Integration test for `retrieve` method', () => {
    it('should validate response', async () => {
      const fineTunes = new FineTunes(integrationClient());
      await fineTunes.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
    });
  });
});
