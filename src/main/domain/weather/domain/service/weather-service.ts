import {weatherWebServiceAdapter} from "../adapters/weather-web-service-adapter";
import DailyForecastParser from "../parse/daily-forecast-parser";
import {WeatherForecast} from "../model/weather-forecast";
import {AlertsParsed} from "../model/alerts-parsed";
import AlertsForecastParser from "../parse/alerts-forecast-parser";
import {Current} from "../model/current";
import {CurrentParsed} from "../model/current-parsed";
import CurrentParser from "../parse/current-parser";
import logger from "../utils/logger";

class WeatherService {
    async getDailyForecast() {
        logger.info({
            event: "WeatherService.getDailyForecast",
            details: "Process started",
        });
        const forecast: WeatherForecast =
            await weatherWebServiceAdapter.getForecast();

        const dailyForecast = DailyForecastParser.parse(forecast);

        logger.info({
            event: "WeatherService.getDailyForecast",
            details: "Process finished",
        });
        return dailyForecast;
    }

    async getAlerts() {
        logger.info({
            event: "WeatherService.getAlerts",
            details: "Process started",
        });
        const forecast: WeatherForecast =
            await weatherWebServiceAdapter.getForecast();

        const alertsParsed: AlertsParsed[] = AlertsForecastParser.parse(forecast);

        logger.info({
            event: "WeatherService.getAlerts",
            details: "Process finished",
        });
        return alertsParsed;
    }

    async getCurrentForecast() {
        logger.info({
            event: "WeatherService.getCurrentForecast",
            details: "Process started",
        });
        const current: Current = await weatherWebServiceAdapter.getCurrent();

        const currentParsed: CurrentParsed = CurrentParser.Parse(current);
        logger.info({
            event: "WeatherService.getCurrentForecast",
            details: "Process finished",
        });
        return currentParsed;
    }
}

export default new WeatherService();
