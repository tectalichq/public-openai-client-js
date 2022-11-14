import { AxiosError } from 'axios';
export default class ClientError extends AxiosError {
  constructor(from: string | Error);
}
