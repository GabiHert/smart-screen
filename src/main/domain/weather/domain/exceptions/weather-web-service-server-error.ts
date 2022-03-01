import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherWebServiceServerError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherWebServiceServerError);

    Object.setPrototypeOf(this, WeatherWebServiceServerError);
  }
}
