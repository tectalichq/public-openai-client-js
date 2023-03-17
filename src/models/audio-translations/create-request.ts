export default interface CreateRequest {
  /**
   * The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a,
   * wav, or webm.
   *
   * Must be an absolute path to a file.
   */
  file: string;

  /**
   * ID of the model to use. Only whisper-1 is currently available.
   */
  model: string;

  /**
   * An optional text to guide the model's style or continue a previous audio
   * segment. The prompt should be in English.
   */
  prompt?: string;

  /**
   * The format of the transcript output, in one of these options: json, text, srt,
   * verbose_json, or vtt.
   *
   * Default Value: 'json'
   */
  response_format?: string;

  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the
   * output more random, while lower values like 0.2 will make it more focused and
   * deterministic. If set to 0, the model will use log probability to automatically
   * increase the temperature until certain thresholds are hit.
   *
   * Default Value: 0
   */
  temperature?: number;
}
