import { expect, it } from '@jest/globals';
import index from '../../src/index';

describe('Index test', () => {
  const client = index('token');

  it('should build successfully', () => {
    expect(client).toHaveProperty('instance');
  });

  it('should Base URL set', () => {
    expect(client.instance.defaults).toHaveProperty('baseURL', 'https://api.openai.com/v1');
  });

  it('should timeout set', () => {
    expect(client.instance.defaults).toHaveProperty('timeout', 10000);
  });
});
