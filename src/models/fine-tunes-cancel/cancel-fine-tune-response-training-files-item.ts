import CancelFineTuneResponseTrainingFilesItemStatusDetails from './cancel-fine-tune-response-training-files-item-status-details';

export default interface CancelFineTuneResponseTrainingFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CancelFineTuneResponseTrainingFilesItemStatusDetails | null;
}
