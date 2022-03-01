import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherWebServiceRequestError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherWebServiceRequestError);

    Object.setPrototypeOf(this, WeatherWebServiceRequestError);
  }
}
