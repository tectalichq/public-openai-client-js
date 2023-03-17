export default interface CreateRequestMessagesItem {
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

  /**
   * The name of the user in a multi-user chat
   */
  name?: string;
}
