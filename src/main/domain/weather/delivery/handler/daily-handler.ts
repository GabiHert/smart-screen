import WeatherService from "../../domain/service/weather-service";
import ErrorParser from "../parse/error-parse";
import ErrorHandler from "./error-handler";
import {WeatherDailyAdapter} from "../../../../controllers/adapters/weather-daily-adapter";

class DailyHandler implements WeatherDailyAdapter {
    async getDaily(): Promise<any> {
        try {
            return await WeatherService.getDailyForecast();
        } catch (ex) {
            const errorParsed = ErrorParser.parse(ex);

            return ErrorHandler.handle(errorParsed);
        }
    }
}

export default new DailyHandler();
