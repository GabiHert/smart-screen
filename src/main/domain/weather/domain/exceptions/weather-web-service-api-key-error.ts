import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherWebServiceApiKeyError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherWebServiceApiKeyError);

    Object.setPrototypeOf(this, WeatherWebServiceApiKeyError);
  }
}
