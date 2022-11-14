import ListResponseDataItemHyperparams from './list-response-data-item-hyperparams';
import ListResponseDataItemTrainingFilesItem from './list-response-data-item-training-files-item';
import ListResponseDataItemValidationFilesItem from './list-response-data-item-validation-files-item';
import ListResponseDataItemResultFilesItem from './list-response-data-item-result-files-item';
import ListResponseDataItemEventsItem from './list-response-data-item-events-item';

export default interface ListResponseDataItem {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: ListResponseDataItemHyperparams;
  training_files: ListResponseDataItemTrainingFilesItem[];
  validation_files: ListResponseDataItemValidationFilesItem[];
  result_files: ListResponseDataItemResultFilesItem[];
  events?: ListResponseDataItemEventsItem[];
}
