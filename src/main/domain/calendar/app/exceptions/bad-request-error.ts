import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class BadRequestError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.BadRequestError);

    Object.setPrototypeOf(this, BadRequestError);
  }
}
