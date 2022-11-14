import { it, jest } from '@jest/globals';
import fs from 'fs';
import ImagesVariations from '../../../src/handlers/images-variations';
import { integrationClient, mockReadStream } from '../../utils';

describe('ImagesVariations test', () => {
  describe.skip('Integration test for `createImage` method', () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const imagesVariations = new ImagesVariations(integrationClient());
      await imagesVariations.createImage({ image: 'path/image.png' });
    });
  });
});
