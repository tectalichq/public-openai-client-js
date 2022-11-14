import CreateResponseDataItem from './create-response-data-item';
import CreateResponseUsage from './create-response-usage';

export default interface CreateResponse {
  object: string;
  model: string;
  data: CreateResponseDataItem[];
  usage: CreateResponseUsage;
}
