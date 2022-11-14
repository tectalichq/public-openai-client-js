export default interface CreateRequest {
  /**
   * ID of the model to use. You can use the List models API to see all of your
   * available models, or see our Model overview for descriptions of them.
   */
  model: string;
  /**
   * Input text to get embeddings for, encoded as a string or array of tokens. To get
   * embeddings for multiple inputs in a single request, pass an array of strings or
   * array of token arrays. Each input must not exceed 2048 tokens in length.
   * Unless you are embedding code, we suggest replacing newlines (n) in your input
   * with a single space, as we have observed inferior results when newlines are
   * present.
   *
   * Example: 'The quick brown fox jumped over the lazy dog'
   */
  input: any;
  /**
   * A unique identifier representing your end-user, which will help OpenAI to
   * monitor and detect abuse. Learn more.
   *
   * Example: 'user-1234'
   */
  user?: string;
}
