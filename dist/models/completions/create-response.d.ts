import CreateResponseItem from './create-response-item';
export default interface CreateResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: CreateResponseItem[];
}
