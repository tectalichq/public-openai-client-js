import CreateResponseChoicesItem from './create-response-choices-item';
import CreateResponseUsage from './create-response-usage';
export default interface CreateResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: CreateResponseChoicesItem[];
  usage: CreateResponseUsage;
}
