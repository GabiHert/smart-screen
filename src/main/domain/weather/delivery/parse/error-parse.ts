import { ErrorParsedDto } from "../dto/error-parsed-dto";

class ErrorParser {
  parse(error): ErrorParsedDto {
    const errorParsed = {
      errorCode: error.errorCode,
      error: error.error,
      alert: error.alert,
      alertMessage: error.alertMessage,
    };
    return errorParsed;
  }
}

export default new ErrorParser();
