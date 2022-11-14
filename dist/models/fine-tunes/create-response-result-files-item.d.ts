import CreateResponseResultFilesItemStatusDetails from './create-response-result-files-item-status-details';
export default interface CreateResponseResultFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CreateResponseResultFilesItemStatusDetails | null;
}
