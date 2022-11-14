import RetrieveResponseValidationFilesItemStatusDetails from './retrieve-response-validation-files-item-status-details';
export default interface RetrieveResponseValidationFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseValidationFilesItemStatusDetails | null;
}
