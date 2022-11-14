import ListResponseDataItemStatusDetails from './list-response-data-item-status-details';

export default interface ListResponseDataItem {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: ListResponseDataItemStatusDetails | null;
}
