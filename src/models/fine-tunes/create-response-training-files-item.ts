import CreateResponseTrainingFilesItemStatusDetails from './create-response-training-files-item-status-details';

export default interface CreateResponseTrainingFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CreateResponseTrainingFilesItemStatusDetails | null;
}
