import CreateResponseHyperparams from './create-response-hyperparams';
import CreateResponseTrainingFilesItem from './create-response-training-files-item';
import CreateResponseValidationFilesItem from './create-response-validation-files-item';
import CreateResponseResultFilesItem from './create-response-result-files-item';
import CreateResponseEventsItem from './create-response-events-item';

export default interface CreateResponse {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: CreateResponseHyperparams;
  training_files: CreateResponseTrainingFilesItem[];
  validation_files: CreateResponseValidationFilesItem[];
  result_files: CreateResponseResultFilesItem[];
  events?: CreateResponseEventsItem[];
}
