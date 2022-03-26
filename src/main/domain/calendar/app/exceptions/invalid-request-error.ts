import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class InvalidRequestError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.InvalidRequestError);

    Object.setPrototypeOf(this, InvalidRequestError);
  }
}
