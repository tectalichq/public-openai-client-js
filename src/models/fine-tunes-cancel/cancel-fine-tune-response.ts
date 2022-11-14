import CancelFineTuneResponseHyperparams from './cancel-fine-tune-response-hyperparams';
import CancelFineTuneResponseTrainingFilesItem from './cancel-fine-tune-response-training-files-item';
import CancelFineTuneResponseValidationFilesItem from './cancel-fine-tune-response-validation-files-item';
import CancelFineTuneResponseResultFilesItem from './cancel-fine-tune-response-result-files-item';
import CancelFineTuneResponseEventsItem from './cancel-fine-tune-response-events-item';

export default interface CancelFineTuneResponse {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: CancelFineTuneResponseHyperparams;
  training_files: CancelFineTuneResponseTrainingFilesItem[];
  validation_files: CancelFineTuneResponseValidationFilesItem[];
  result_files: CancelFineTuneResponseResultFilesItem[];
  events?: CancelFineTuneResponseEventsItem[];
}
