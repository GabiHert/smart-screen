import { Current } from "../model/current";
import { CurrentParsed } from "../model/current-parsed";
import Logger from "../../../utils/logger";

class CurrentParser {
  Parse(current: Current): CurrentParsed {
    Logger.info({
      event: "CurrentParser.parse",
      status: "Process started",
    });

    const currentParsed: CurrentParsed = {
      main: {
        feels_like: `${current.main.feels_like}°C`,
        humidity: current.main.humidity,
        temp: `${current.main.temp}°C`,
        temp_max: `${current.main.temp_max}°C`,
        temp_min: `${current.main.temp_min}°C`,
      },
      weather: {
        description: current.weather[0].description,
        main: current.weather[0].main,
      },
    };

    Logger.info({
      event: "CurrentParser.parse",
      status: "Process finised",
    });

    return currentParsed;
  }
}

export default new CurrentParser();
