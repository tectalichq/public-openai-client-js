import { it, jest } from '@jest/globals';
import fs from 'fs';
import ImagesEdits from '../../../src/handlers/images-edits';
import { integrationClient, mockReadStream } from '../../utils';

describe('ImagesEdits test', () => {
  describe.skip('Integration test for `createImage` method', () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const imagesEdits = new ImagesEdits(integrationClient());
      await imagesEdits.createImage({
        image: 'path/image.png',
        mask: 'path/mask.png',
        prompt: 'A cute baby sea otter wearing a beret'
      });
    });
  });
});
