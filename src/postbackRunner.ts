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

    public async sendPostback(postback: Postback) {
        const url = new URL(this.postbackUrl);

        Object.keys(postback).forEach((key) => {
            if (
                (postback as Record<string, any>)[key] === null ||
                (postback as Record<string, any>)[key] === undefined
            ) {
                return;
            }

            url.searchParams.append(key, (postback as Record<string, any>)[key].toString());
        });

        await axios.get(url.href);
    }
}
