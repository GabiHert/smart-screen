export class ErrorType {
  static readonly InvalidRequestError = new ErrorType(
    "01",
    "invalid request, status 400",
    false,
    "Blynk request error"
  );

  static readonly BadRequestError = new ErrorType(
      "02",
      "bad request, status 500",
      false,
      "Blynk request error"
  );


  private constructor(
    readonly errorCode: string,
    readonly error: string,
    readonly alert: boolean,
    readonly alertMessage: string
  ) {}
}
