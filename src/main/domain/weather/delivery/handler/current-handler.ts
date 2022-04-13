import WeatherService from "../../domain/service/weather-service";
import ErrorParser from "../parse/error-parse";
import ErrorHandler from "./error-handler";
import {WeatherCurrentAdapter} from "../../../../controllers/adapters/weather-current-adapter";


class CurrentHandler implements WeatherCurrentAdapter {
  async getCurrent(): Promise<any> {
    try {
      return await WeatherService.getCurrentForecast();
    } catch (ex) {
      throw new Error(ex.message)
    }
  }
}

export default new CurrentHandler();
