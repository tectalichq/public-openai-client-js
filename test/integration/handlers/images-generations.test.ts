import { it } from '@jest/globals';
import ImagesGenerations from '../../../src/handlers/images-generations';
import { integrationClient } from '../../utils';

describe('ImagesGenerations test', () => {
  describe('Integration test for `create` method', () => {
    it('should validate response', async () => {
      const imagesGenerations = new ImagesGenerations(integrationClient());
      await imagesGenerations.create({ prompt: 'A cute baby sea otter' });
    });
  });
});
