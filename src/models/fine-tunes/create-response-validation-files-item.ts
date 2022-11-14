import CreateResponseValidationFilesItemStatusDetails from './create-response-validation-files-item-status-details';

export default interface CreateResponseValidationFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CreateResponseValidationFilesItemStatusDetails | null;
}
