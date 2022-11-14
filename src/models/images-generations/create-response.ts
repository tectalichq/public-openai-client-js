import CreateResponseDataItem from './create-response-data-item';

export default interface CreateResponse {
  created: number;
  data: CreateResponseDataItem[];
}
