import CreateResponseChoicesItemLogprobs from './create-response-choices-item-logprobs';

export default interface CreateResponseChoicesItem {
  text?: string;
  index?: number;
  logprobs?: CreateResponseChoicesItemLogprobs | null;
  finish_reason?: string;
}
