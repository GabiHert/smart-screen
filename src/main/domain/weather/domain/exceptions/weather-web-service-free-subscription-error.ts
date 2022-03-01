import HttpRequestError from "./http-request-error";
import { ErrorType } from "../enums/error-type";

export default class WeatherWebServiceFreeSubscriptionError extends HttpRequestError {
  constructor(message: string) {
    super(message, ErrorType.WeatherWebServiceFreeSubscriptionError);

    Object.setPrototypeOf(this, WeatherWebServiceFreeSubscriptionError);
  }
}
