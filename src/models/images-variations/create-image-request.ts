export default interface CreateImageRequest {
  /**
   * The image to use as the basis for the variation(s). Must be a valid PNG file,
   * less than 4MB, and square.
   *
   * Must be an absolute path to a file.
   */
  image: string;

  /**
   * The number of images to generate. Must be between 1 and 10.
   *
   * Default Value: 1
   *
   * Example: 1
   */
  n?: number | null;

  /**
   * The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.
   *
   * Allowed values: '256x256', '512x512', '1024x1024'
   *
   * Default Value: '1024x1024'
   *
   * Example: '1024x1024'
   */
  size?: string | null;

  /**
   * The format in which the generated images are returned. Must be one of url or
   * b64_json.
   *
   * Allowed values: 'url', 'b64_json'
   *
   * Default Value: 'url'
   *
   * Example: 'url'
   */
  response_format?: string | null;

  /**
   * A unique identifier representing your end-user, which will help OpenAI to
   * monitor and detect abuse. Learn more.
   *
   * Example: 'user-1234'
   */
  user?: string;
}
