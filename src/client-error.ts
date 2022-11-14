import { AxiosError } from 'axios';

export default class ClientError extends AxiosError {
  constructor(from: string | Error) {
    const message: string = from instanceof Error ? from.message : from;
    super(message);
    this.name = 'ClientError';
    if (from instanceof Error) {
      this.stack = from.stack;
    }
    if (from instanceof AxiosError) {
      this.code = from.code;
      this.config = from.config;
      this.request = from.request;
      this.response = from.response;
    }
  }
}
