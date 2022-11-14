import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import DownloadResponse from '../models/files-content/download-response';
export default class FilesContent {
  client: Client;
  constructor(Client: Client);
  /**
   * Returns the contents of the specified file
   *
   * Operation URL: GET /files/{file_id}/content
   * Operation ID:  downloadFile
   *
   * @param fileId The ID of the file to use for this request
   */
  download(fileId: string, config?: AxiosRequestConfig): ClientPromise<DownloadResponse>;
}
