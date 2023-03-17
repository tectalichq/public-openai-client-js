import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/audio-translations/create-request';
import CreateResponse from '../models/audio-translations/create-response';
export default class AudioTranslations {
  client: Client;
  constructor(Client: Client);
  /**
   * Translates audio into into English.
   *
   * Operation URL: POST /audio/translations
   * Operation ID:  createTranslation
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
