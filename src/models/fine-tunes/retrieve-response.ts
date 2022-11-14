import RetrieveResponseHyperparams from './retrieve-response-hyperparams';
import RetrieveResponseTrainingFilesItem from './retrieve-response-training-files-item';
import RetrieveResponseValidationFilesItem from './retrieve-response-validation-files-item';
import RetrieveResponseResultFilesItem from './retrieve-response-result-files-item';
import RetrieveResponseEventsItem from './retrieve-response-events-item';

export default interface RetrieveResponse {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: RetrieveResponseHyperparams;
  training_files: RetrieveResponseTrainingFilesItem[];
  validation_files: RetrieveResponseValidationFilesItem[];
  result_files: RetrieveResponseResultFilesItem[];
  events?: RetrieveResponseEventsItem[];
}
