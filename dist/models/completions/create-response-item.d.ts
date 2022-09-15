import CreateResponseItemLogprobs from './create-response-item-logprobs';
export default interface CreateResponseItem {
    text: string;
    index: number;
    logprobs?: CreateResponseItemLogprobs;
    finish_reason: string;
}
