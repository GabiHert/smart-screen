export class ErrorType {
  static readonly WeatherApiEmptyResponse = new ErrorType(
    "01",
    "Weather Api empty response",
    false,
    ""
  );

  static readonly WeatherWebServiceRequestError = new ErrorType(
    "02",
    "Requisition error",
    false,
    "Request error"
  );

  static readonly WeatherWebServiceApiKeyError = new ErrorType(
    "03",
    "Api key error - 401",
    false,
    "Api key error - 401"
  );
  static readonly WeatherWebServiceFreeSubscriptionError = new ErrorType(
    "04",
    "Api key free subscription error - 429",
    true,
    "Api key free subscription error - 429"
  );
  static readonly WeatherWebServiceNotFoundError = new ErrorType(
    "05",
    "Not found - 404",
    true,
    "Not found - 404"
  );
  static readonly WeatherWebServiceServerError = new ErrorType(
    "06",
    "Server error - 500",
    true,
    "Server error - 500"
  );

  private constructor(
    readonly errorCode: string,
    readonly error: string,
    readonly alert: boolean,
    readonly alertMessage: string
  ) {}
}
