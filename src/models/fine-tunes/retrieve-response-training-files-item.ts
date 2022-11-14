import RetrieveResponseTrainingFilesItemStatusDetails from './retrieve-response-training-files-item-status-details';

export default interface RetrieveResponseTrainingFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseTrainingFilesItemStatusDetails | null;
}
