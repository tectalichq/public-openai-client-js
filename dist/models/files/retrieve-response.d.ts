import RetrieveResponseStatusDetails from './retrieve-response-status-details';
export default interface RetrieveResponse {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: RetrieveResponseStatusDetails | null;
}
