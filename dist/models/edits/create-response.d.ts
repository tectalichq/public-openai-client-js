import CreateResponseChoicesItem from './create-response-choices-item';
import CreateResponseUsage from './create-response-usage';
export default interface CreateResponse {
  object: string;
  created: number;
  choices: CreateResponseChoicesItem[];
  usage: CreateResponseUsage;
}
