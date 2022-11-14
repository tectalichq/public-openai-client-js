import ListResponseDataItemValidationFilesItemStatusDetails from './list-response-data-item-validation-files-item-status-details';
export default interface ListResponseDataItemValidationFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: ListResponseDataItemValidationFilesItemStatusDetails | null;
}
