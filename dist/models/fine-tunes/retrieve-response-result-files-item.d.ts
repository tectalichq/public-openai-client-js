import RetrieveResponseResultFilesItemStatusDetails from './retrieve-response-result-files-item-status-details';
export default interface RetrieveResponseResultFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseResultFilesItemStatusDetails | null;
}
