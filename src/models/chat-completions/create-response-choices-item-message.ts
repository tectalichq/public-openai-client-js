export default interface CreateResponseChoicesItemMessage {
  /**
   * The role of the author of this message.
   *
   * Allowed values: 'system', 'user', 'assistant'
   */
  role: string;

  /**
   * The contents of the message
   */
  content: string;
}
