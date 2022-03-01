import { CurrentParsed } from "../../domain/model/current-parsed";
import WeatherService from "../../domain/service/weather-service";
import ErrorParser from "../parse/error-parse";
import ErrorHandler from "./error-handler";

class CurrentHandler {
  async getCurrent(): Promise<any> {
    try {
      return await WeatherService.getCurrentForecast();
    } catch (ex) {
      const errorParsed = ErrorParser.parse(ex);

      ErrorHandler.handle(errorParsed);
    }
  }
}

export default new CurrentHandler();
