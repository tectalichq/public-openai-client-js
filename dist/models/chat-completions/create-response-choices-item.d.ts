import CreateResponseChoicesItemMessage from './create-response-choices-item-message';
export default interface CreateResponseChoicesItem {
  index?: number;
  message?: CreateResponseChoicesItemMessage;
  finish_reason?: string;
}
