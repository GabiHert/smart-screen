import WebRequest from "../../implementation/web-request";

export interface WebRequestAdapter {
    get(url: string): Promise<EventDto[]>
}

export const webRequestAdapter: WebRequestAdapter = WebRequest
