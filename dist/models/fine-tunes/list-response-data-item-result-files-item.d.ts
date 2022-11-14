import ListResponseDataItemResultFilesItemStatusDetails from './list-response-data-item-result-files-item-status-details';
export default interface ListResponseDataItemResultFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: ListResponseDataItemResultFilesItemStatusDetails | null;
}
