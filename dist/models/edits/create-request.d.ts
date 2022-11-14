export default interface CreateRequest {
  /**
   * ID of the model to use. You can use the List models API to see all of your
   * available models, or see our Model overview for descriptions of them.
   */
  model: string;
  /**
   * The input text to use as a starting point for the edit.
   *
   * Default Value: ''
   *
   * Example: 'What day of the wek is it?'
   */
  input?: string | null;
  /**
   * The instruction that tells the model how to edit the prompt.
   *
   * Example: 'Fix the spelling mistakes.'
   */
  instruction: string;
  /**
   * How many edits to generate for the input and instruction.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  n?: number | null;
  /**
   * What sampling temperature to use. Higher values means the model will take more
   * risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones
   * with a well-defined answer.
   * We generally recommend altering this or top_p but not both.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   * We generally recommend altering this or temperature but not both.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  top_p?: number | null;
}
