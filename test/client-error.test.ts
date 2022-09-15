import { expect, it } from '@jest/globals';
import ClientError from '../src/client-error';

describe('Client Error test', () => {
  const err = new ClientError('test');

  it('should have name and message', () => {
    expect(err).toHaveProperty('message', 'test');
    expect(err).toHaveProperty('name', 'ClientError');
  });
});
