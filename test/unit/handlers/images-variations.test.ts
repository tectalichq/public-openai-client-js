import { expect, it, jest } from '@jest/globals';
import MockAdapter from 'axios-mock-adapter';
import FormData from 'form-data';
import fs from 'fs';
import Client from '../../../src/client';
import ImagesVariations from '../../../src/handlers/images-variations';
import { mockReadStream, unitClient, validateRequest } from '../../utils';

describe('ImagesVariations test', () => {
  let client: Client;
  let imageVariations: ImagesVariations;
  let mock: MockAdapter;

  beforeEach(() => {
    ({ client, mock } = unitClient());
    imageVariations = new ImagesVariations(client);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should defaults set', () => {
    // ImagesVariations Handler
    expect(imageVariations).toHaveProperty('client', client);
  });

  describe('Unit test for `createImage` method', () => {
    // set up mock for axios.get
    const mockedFs = jest.spyOn(fs, 'createReadStream');
    mockedFs.mockReturnValue(mockReadStream());

    it('should return promise with basic information', async () => {
      mock.onPost('http://localhost/images/variations').reply(200, {});
      const result = await imageVariations.createImage({ image: 'path/image.png' });
      expect(result.status).toBe(200);
      expect(result.config.method).toBe('post');
      expect(result.config.headers).toHaveProperty('Content-Type');
      // @ts-ignore TS2532: Object is possibly 'undefined'.
      expect(result.config.headers['Content-Type']).toContain('multipart/form-data; boundary');
      expect(result.config.data).toBeInstanceOf(FormData);
    });

    it.skip('should validate request', async () => {
    // Skipped because the default mocking server does not support multipart file upload requests.
    mock.onPost('http://localhost/images/variations').reply(200, {});
      const response = await imageVariations.createImage({ image: 'path/image.png' });
      const err = await validateRequest(response.config);
      expect(err).toBe(undefined);
    });
  });
});
