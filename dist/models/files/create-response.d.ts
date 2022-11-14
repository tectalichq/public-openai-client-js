import CreateResponseStatusDetails from './create-response-status-details';
export default interface CreateResponse {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: CreateResponseStatusDetails | null;
}
