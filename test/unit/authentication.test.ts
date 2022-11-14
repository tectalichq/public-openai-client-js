import { expect, it } from '@jest/globals';
import axios from 'axios';
import authentication from '../../src/authentication';

describe('Authentication test', () => {
  const instance = authentication('token', axios.create({}));

  it('should `Authorization` header set', () => {
    expect(instance.defaults.headers.common).toHaveProperty('Authorization', 'Bearer token');
  });
});
