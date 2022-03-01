import { ErrorParsedDto } from "../dto/error-parsed-dto";
import { ErrorAlertDto } from "../dto/error-alert-dto";

class ErrorHandler {
  handle(errorParsed: ErrorParsedDto) {
    if (errorParsed.alert) {
      const errorAlert: ErrorAlertDto = { reason: errorParsed.alertMessage };
      return errorAlert;
    }
    return true;
  }
}

export default new ErrorHandler();
