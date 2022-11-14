import ListResponseDataItem from './list-response-data-item';
export default interface ListResponse {
  object: string;
  data: ListResponseDataItem[];
}
