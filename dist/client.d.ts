import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import Completions from './handlers/completions';
import Edits from './handlers/edits';
import Embeddings from './handlers/embeddings';
import Files from './handlers/files';
import FilesContent from './handlers/files-content';
import FineTunes from './handlers/fine-tunes';
import FineTunesCancel from './handlers/fine-tunes-cancel';
import FineTunesEvents from './handlers/fine-tunes-events';
import ImagesEdits from './handlers/images-edits';
import ImagesGenerations from './handlers/images-generations';
import ImagesVariations from './handlers/images-variations';
import Models from './handlers/models';
import Moderations from './handlers/moderations';
export interface ClientPromise<Data> extends AxiosPromise<Data> {}
/**
 * An HTTP request.
 */
export interface ClientRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  path: string;
  data?: AxiosRequestConfig['data'];
  headers?: AxiosRequestHeaders;
  params?: AxiosRequestConfig['params'];
  uploads?: string[];
}
/**
 * Holds and interacts with the Axios Client.
 */
export default class {
  #private;
  instance: AxiosInstance;
  /**
   * Access to the Completions handler.
   */
  completions: Completions;
  /**
   * Access to the Edits handler.
   */
  edits: Edits;
  /**
   * Access to the Embeddings handler.
   */
  embeddings: Embeddings;
  /**
   * Access to the Files handler.
   */
  files: Files;
  /**
   * Access to the FilesContent handler.
   */
  filesContent: FilesContent;
  /**
   * Access to the FineTunes handler.
   */
  fineTunes: FineTunes;
  /**
   * Access to the FineTunesCancel handler.
   */
  fineTunesCancel: FineTunesCancel;
  /**
   * Access to the FineTunesEvents handler.
   */
  fineTunesEvents: FineTunesEvents;
  /**
   * Access to the ImagesEdits handler.
   */
  imagesEdits: ImagesEdits;
  /**
   * Access to the ImagesGenerations handler.
   */
  imagesGenerations: ImagesGenerations;
  /**
   * Access to the ImagesVariations handler.
   */
  imagesVariations: ImagesVariations;
  /**
   * Access to the Models handler.
   */
  models: Models;
  /**
   * Access to the Moderations handler.
   */
  moderations: Moderations;
  constructor(instance: AxiosInstance);
  /**
   * Perform the specified HTTP request.
   */
  request<Data>(request: ClientRequest, config?: AxiosRequestConfig): ClientPromise<Data>;
}
