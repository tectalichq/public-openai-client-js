import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/chat-completions/create-request';
import CreateResponse from '../models/chat-completions/create-response';
export default class ChatCompletions {
  client: Client;
  constructor(Client: Client);
  /**
   * Creates a completion for the chat message
   *
   * Operation URL: POST /chat/completions
   * Operation ID:  createChatCompletion
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
}
