import { AxiosRequestConfig } from 'axios';
import Client, { ClientPromise } from '../client';
import CreateRequest from '../models/files/create-request';
import CreateResponse from '../models/files/create-response';
import DeleteResponse from '../models/files/delete-response';
import ListResponse from '../models/files/list-response';
import RetrieveResponse from '../models/files/retrieve-response';
export default class Files {
  client: Client;
  constructor(Client: Client);
  /**
   * Returns a list of files that belong to the user's organization.
   *
   * Operation URL: GET /files
   * Operation ID:  listFiles
   */
  list(config?: AxiosRequestConfig): ClientPromise<ListResponse>;
  /**
   * Upload a file that contains document(s) to be used across various
   * endpoints/features. Currently, the size of all the files uploaded by one
   * organization can be up to 1 GB. Please contact us if you need to increase the
   * storage limit.
   *
   * Operation URL: POST /files
   * Operation ID:  createFile
   */
  create(data: CreateRequest, config?: AxiosRequestConfig): ClientPromise<CreateResponse>;
  /**
   * Returns information about a specific file.
   *
   * Operation URL: GET /files/{file_id}
   * Operation ID:  retrieveFile
   */
  retrieve(fileID: string, config?: AxiosRequestConfig): ClientPromise<RetrieveResponse>;
  /**
   * Delete a file.
   *
   * Operation URL: DELETE /files/{file_id}
   * Operation ID:  deleteFile
   */
  delete(fileID: string, config?: AxiosRequestConfig): ClientPromise<DeleteResponse>;
}
