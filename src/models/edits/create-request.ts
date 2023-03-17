export default interface CreateRequest {
  /**
   * ID of the model to use. You can use the text-davinci-edit-001 or
   * code-davinci-edit-001 model with this endpoint.
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
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
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
