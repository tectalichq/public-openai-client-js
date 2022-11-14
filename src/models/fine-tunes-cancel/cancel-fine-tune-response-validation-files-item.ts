import CancelFineTuneResponseValidationFilesItemStatusDetails from './cancel-fine-tune-response-validation-files-item-status-details';

export default interface CancelFineTuneResponseValidationFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CancelFineTuneResponseValidationFilesItemStatusDetails | null;
}
