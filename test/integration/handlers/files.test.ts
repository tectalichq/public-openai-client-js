import { it, jest } from '@jest/globals';
import fs from 'fs';
import Files from '../../../src/handlers/files';
import { integrationClient, mockReadStream } from '../../utils';

describe('Files test', () => {
  describe('Integration test for `list` method', () => {
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new Files(integrationClient());
      await files.list();
    });
  });

  describe.skip('Integration test for `create` method', () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new Files(integrationClient());
      await files.create({ file: 'path/file.jsonl', purpose: 'fine-tune' });
    });
  });

  describe('Integration test for `retrieve` method', () => {
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new Files(integrationClient());
      await files.retrieve('string');
    });
  });

  describe('Integration test for `delete` method', () => {
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());
    it('should validate response', async () => {
      const files = new Files(integrationClient());
      await files.delete('string');
    });
  });
});
