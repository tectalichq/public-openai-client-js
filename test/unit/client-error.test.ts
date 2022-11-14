import { expect, it } from '@jest/globals';
import { AxiosError, AxiosResponse } from 'axios';
import ClientError from '../../src/client-error';

describe('Client Error test', () => {
  it('should have name and message', () => {
    const err = new ClientError('test');
    expect(err).toHaveProperty('message', 'test');
    expect(err).toHaveProperty('name', 'ClientError');
    expect(err).not.toHaveProperty('stack');
    expect(err).not.toHaveProperty('code');
    expect(err).not.toHaveProperty('config');
    expect(err).not.toHaveProperty('request');
    expect(err).not.toHaveProperty('response');
  });

  it('should build from other error', () => {
    const err = new ClientError(new Error('test'));
    expect(err).toHaveProperty('message', 'test');
    expect(err).toHaveProperty('name', 'ClientError');
    expect(err).toHaveProperty('stack');
    expect(err.stack).toContain('Error: test');
    expect(err).not.toHaveProperty('code');
    expect(err).not.toHaveProperty('config');
    expect(err).not.toHaveProperty('request');
    expect(err).not.toHaveProperty('response');
  });

  it('should build from axios error', () => {
    const response = {
      data: 'body',
      status: 400,
      statusText: 'bad request',
      headers: {},
      config: {}
    } as AxiosResponse;
    const err = new ClientError(new AxiosError('test', '400', {}, 'request', response));
    expect(err).toHaveProperty('message', 'test');
    expect(err).toHaveProperty('name', 'ClientError');
    expect(err).toHaveProperty('code', '400');
    expect(err).toHaveProperty('config', {});
    expect(err).toHaveProperty('request', 'request');
    expect(err).toHaveProperty('response', response);
  });
});
