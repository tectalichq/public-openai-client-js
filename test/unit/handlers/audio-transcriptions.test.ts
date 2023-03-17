import { expect, it, jest } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import FormData from 'form-data';
import fs from 'fs';
import Client from '../../../src/client';
import AudioTranscriptions from '../../../src/handlers/audio-transcriptions';
import { mockReadStream, unitClient, validateRequest } from '../../utils';

describe('AudioTranscriptions test', () => {
  let client: Client;
  let audioTranscriptions: AudioTranscriptions;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    audioTranscriptions = new AudioTranscriptions(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // AudioTranscriptions Handler
    expect(audioTranscriptions).toHaveProperty('client', client);
  });

  describe('Unit test for `create` method', () => {
    // set up mock for axios.get
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());

    it('should return promise with basic information', async () => {
      mock.onPost('/audio/transcriptions').reply(200, {});
      const result = await audioTranscriptions.create({ file: 'path/file.mp4', model: 'whisper-1' });
      expect(result.status).toBe(200);
      expect(result.config.method).toBe('post');
      expect(result.config.headers).toHaveProperty('Content-Type');
      // @ts-ignore TS2532: Object is possibly 'undefined'.
      expect(result.config.headers['Content-Type']).toContain('multipart/form-data; boundary');
      expect(result.config.data).toBeInstanceOf(FormData);
    });

    it.skip('should validate request', async () => {
      // Skipped because the default mocking server does not support multipart file upload requests.
      mock.onPost('/audio/transcriptions').reply(200, {});
      const response = await audioTranscriptions.create({ file: 'path/file.mp3', model: 'whisper-1' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
