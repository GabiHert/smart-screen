import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherApiEmptyResponse extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherApiEmptyResponse);

    Object.setPrototypeOf(this, WeatherApiEmptyResponse);
  }
}
