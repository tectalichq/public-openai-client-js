import { it, jest } from '@jest/globals';
import fs from 'fs';
import AudioTranslations from '../../../src/handlers/audio-translations';
import { integrationClient, mockReadStream } from '../../utils';

describe('AudioTranslations test', () => {
  describe.skip('Integration test for `create` method', () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new AudioTranslations(integrationClient());
      await files.create({ file: 'path/file.mp3', model: 'whisper-1' });
    });
  });
});
