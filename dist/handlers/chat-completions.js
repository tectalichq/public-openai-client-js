'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class ChatCompletions {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Creates a completion for the chat message
   *
   * Operation URL: POST /chat/completions
   * Operation ID:  createChatCompletion
   */
  create (data, config) {
    const path = '/chat/completions';
    return this.client.request(
      {
        method: 'POST',
        path,
        data
      },
      config
    );
  }
}
exports.default = ChatCompletions;
