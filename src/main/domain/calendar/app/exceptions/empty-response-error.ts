import HttpRequestError from "./http-request-error";
import {ErrorType} from "../enums/error-type";

export default class EmptyResponseError extends HttpRequestError {
    constructor(message: string) {
        super(message, ErrorType.EmptyResponseError);

        Object.setPrototypeOf(this, EmptyResponseError);
    }
}
