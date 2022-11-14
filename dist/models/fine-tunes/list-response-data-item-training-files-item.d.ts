import ListResponseDataItemTrainingFilesItemStatusDetails from './list-response-data-item-training-files-item-status-details';
export default interface ListResponseDataItemTrainingFilesItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: ListResponseDataItemTrainingFilesItemStatusDetails | null;
}
