'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class FilesContent {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Returns the contents of the specified file
   *
   * Operation URL: GET /files/{file_id}/content
   * Operation ID:  downloadFile
   *
   * @param fileId The ID of the file to use for this request
   */
  download (fileId, config) {
    const path = `/files/${fileId}/content`;
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }
}
exports.default = FilesContent;
