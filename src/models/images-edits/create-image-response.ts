import CreateImageResponseDataItem from './create-image-response-data-item';

export default interface CreateImageResponse {
  created: number;
  data: CreateImageResponseDataItem[];
}
