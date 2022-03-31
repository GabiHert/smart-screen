import { CurrentParsed } from "../../domain/model/current-parsed";
import WeatherService from "../../domain/service/weather-service";
import ErrorParser from "../parse/error-parse";
import ErrorHandler from "./error-handler";
import {WeatherCurrentAdapter} from "../../../../controllers/adapters/weather-current-adapter";


class CurrentHandler implements WeatherCurrentAdapter {
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
