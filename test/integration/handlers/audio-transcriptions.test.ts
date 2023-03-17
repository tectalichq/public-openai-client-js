import { it, jest } from '@jest/globals';
import fs from 'fs';
import AudioTranscriptions from '../../../src/handlers/audio-transcriptions';
import { integrationClient, mockReadStream } from '../../utils';

describe('AudioTranscriptions test', () => {
  describe.skip('Integration test for `create` method', () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new AudioTranscriptions(integrationClient());
      await files.create({ file: 'path/file.mp3', model: 'whisper-1' });
    });
  });
});
