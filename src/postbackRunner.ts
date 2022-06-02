import axios from 'axios';

export enum Status {
    APPROVED = 1,
    PENDING = 2,
    DECLINED = 3,
    HOLD = 5,
}

export interface Postback {
    clickid: string;
    pid: number;
    offer_id: number;
    status: Status;
    goal: number;
}

export class PostbackRunner {
    private readonly apiKey: string;

    private readonly postbackUrl: string;

    constructor(postbackUrl: string, apiKey: string) {
        this.postbackUrl = postbackUrl;
        this.apiKey = apiKey;
    }

    private async send(path: string, params: URLSearchParams) {
        return axios.post(this.postbackUrl + path, params, {
            headers: {
                apiKey: this.apiKey,
            },
        });
    }

    public sendPostback(postback: Postback) {


    }
}
