import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherWebServiceNotFoundError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherWebServiceNotFoundError);

    Object.setPrototypeOf(this, WeatherWebServiceNotFoundError);
  }
}
