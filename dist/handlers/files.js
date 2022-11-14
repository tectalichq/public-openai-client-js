'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
class Files {
  constructor (Client) {
    this.client = Client;
  }

  /**
   * Returns a list of files that belong to the user's organization.
   *
   * Operation URL: GET /files
   * Operation ID:  listFiles
   */
  list (config) {
    const path = '/files';
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Upload a file that contains document(s) to be used across various
   * endpoints/features. Currently, the size of all the files uploaded by one
   * organization can be up to 1 GB. Please contact us if you need to increase the
   * storage limit.
   *
   * Operation URL: POST /files
   * Operation ID:  createFile
   */
  create (data, config) {
    const path = '/files';
    return this.client.request(
      {
        method: 'POST',
        path,
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        uploads: ['file']
      },
      config
    );
  }

  /**
   * Returns information about a specific file.
   *
   * Operation URL: GET /files/{file_id}
   * Operation ID:  retrieveFile
   */
  retrieve (fileID, config) {
    const path = `/files/${fileID}`;
    return this.client.request(
      {
        method: 'GET',
        path
      },
      config
    );
  }

  /**
   * Delete a file.
   *
   * Operation URL: DELETE /files/{file_id}
   * Operation ID:  deleteFile
   */
  delete (fileID, config) {
    const path = `/files/${fileID}`;
    return this.client.request(
      {
        method: 'DELETE',
        path
      },
      config
    );
  }
}
exports.default = Files;
