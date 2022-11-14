import CreateResponseChoicesItemLogprobsTopLogprobsItem from './create-response-choices-item-logprobs-top-logprobs-item';

export default interface CreateResponseChoicesItemLogprobs {
  tokens?: string[];
  token_logprobs?: number[];
  top_logprobs?: CreateResponseChoicesItemLogprobsTopLogprobsItem[];
  text_offset?: number[];
}
