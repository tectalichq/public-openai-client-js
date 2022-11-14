export default interface CreateImageRequest {
  /**
   * The image to edit. Must be a valid PNG file, less than 4MB, and square.
   *
   * Must be an absolute path to a file.
   */
  image: string;

  /**
   * An additional image whose fully transparent areas (e.g. where alpha is zero)
   * indicate where image should be edited. Must be a valid PNG file, less than 4MB,
   * and have the same dimensions as image.
   *
   * Must be an absolute path to a file.
   */
  mask: string;

  /**
   * A text description of the desired image(s). The maximum length is 1000
   * characters.
   *
   * Example: 'A cute baby sea otter wearing a beret'
   */
  prompt: string;

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
