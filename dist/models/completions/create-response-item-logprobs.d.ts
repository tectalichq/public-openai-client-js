import CreateResponseItemLogprobsItem from './create-response-item-logprobs-item';
export default interface CreateResponseItemLogprobs {
    tokens: string[];
    token_logprobs: number[];
    top_logprobs: CreateResponseItemLogprobsItem[];
    text_offset: number[];
}
