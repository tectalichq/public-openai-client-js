import CreateRequestLogitBias from './create-request-logit-bias';

export default interface CreateRequest {
  model: string;
  prompt?: string;
  suffix?: string
  max_tokens?: number | null;
  temperature?: number | null;
  top_p?: number | null;
  n?: number | null;
  stream?: boolean | null;
  logprobs?: number | null;
  echo?: boolean | null;
  stop?: string | null;
  presence_penalty?: number | null;
  frequency_penalty?: number | null;
  best_of?: number | null;
  logit_bias?: CreateRequestLogitBias | null;
  user?: string;
}
