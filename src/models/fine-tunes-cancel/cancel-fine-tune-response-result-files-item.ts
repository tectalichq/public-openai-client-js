import CancelFineTuneResponseResultFilesItemStatusDetails from './cancel-fine-tune-response-result-files-item-status-details';

export default interface CancelFineTuneResponseResultFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CancelFineTuneResponseResultFilesItemStatusDetails | null;
}
