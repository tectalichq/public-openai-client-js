import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/audio-transcriptions/create-request';
import CreateResponse from '../models/audio-transcriptions/create-response';

export default class AudioTranscriptions {
  client: Client;
  constructor(Client: Client) {
    this.client = Client;
  }

  /**
   * Transcribes audio into the input language.
   *
   * Operation URL: POST /audio/transcriptions
   * Operation ID:  createTranscription
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse> {
    const path = '/audio/transcriptions';
    return this.client.request<CreateResponse>(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['file']
      },
      config
    );
  }
}
