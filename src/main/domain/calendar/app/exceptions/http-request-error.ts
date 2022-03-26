import { ErrorType } from "../enums/error-type";

export default class HttpRequestError extends Error {
  private readonly _errorType: ErrorType;

  constructor(message: string, errorType: ErrorType) {
    super(message);
    this._errorType = errorType;

    Object.setPrototypeOf(this, HttpRequestError.prototype);
  }

  get errorType(): ErrorType {
    return this._errorType;
  }
}
