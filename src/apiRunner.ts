import axios from 'axios';

export enum ConversionStatus {
    CONFIRMED = 'confirmed',
    PENDING = 'pending',
    DECLINED = 'declined',
    HOLD = 'hold',
}

export interface Conversion {
    offer: number;
    pid: number;
    action_id?: number;
    click_id: number;
    goal?: number;
    ip?: string;
    ua?: string;
    comment?: string;
    sum?: number;
    status: ConversionStatus;
    created_at?: string;
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
    custom_field4?: string;
    custom_field5?: string;
    custom_field6?: string;
    custom_field7?: string;
}

export interface ConversionEditOptions {
    status?: ConversionStatus;
    currency?: string;
    payouts?: number;
    revenue?: number;
    comment?: string;
}

/**
 * main class to run api calls to affise server
 * @param {string} url - url to affise server
 * @param {string} token - token to access affise server
 */
export class ApiRunner {
    private readonly url: string;

    private readonly token: string;

    constructor(url: string, token: string) {
        this.url = url;
        this.token = token;
    }

    private async send(path: string, params: URLSearchParams) {
        return axios.post(this.url + path, params, {
            headers: {
                'API-Key': this.token,
            },
        });
    }

    /**
     * import a single conversion
     * @param conversion {Conversion}
     */
    public async importConversion(conversion: Conversion) {
        const path = `/3.0/admin/conversion/import`;
        const params = new URLSearchParams();

        const keys = Object.keys(conversion);

        keys.forEach((key) => {
            params.append(key, (conversion as Record<string, any>)[key].toString());
        });

        await this.send(path, params);
    }

    /**
     * Edit conversions in bulk
     * @param conversionId
     * @param options {ConversionEditOptions}
     */
    public async editConversions(conversionId: Array<number>, options: ConversionEditOptions) {
        const path = `/3.0/admin/conversion/edit/`;
        const params = new URLSearchParams();

        const optionKeys = Object.keys(options);

        optionKeys.forEach((key) => {
            params.append(key, (options as Record<any, any>)[key].toString());
        });

        await this.send(path, params);
    }
}
