import CreateResponseResultsItem from './create-response-results-item';

export default interface CreateResponse {
  id: string;
  model: string;
  results: CreateResponseResultsItem[];
}
