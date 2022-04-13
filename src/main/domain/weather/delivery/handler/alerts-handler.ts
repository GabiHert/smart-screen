import WeatherService from "../../domain/service/weather-service";
import ErrorParser from "../parse/error-parse";
import ErrorHandler from "./error-handler";
import {WeatherAlertsAdapter} from "../../../../controllers/adapters/weather-alerts-adapter";

class AlertsHandler implements WeatherAlertsAdapter {
    async getAlerts(): Promise<any> {
        try {
            const alerts = await WeatherService.getAlerts();
            if(!alerts) return ""
            return alerts
        } catch (ex) {
            const errorParsed = ErrorParser.parse(ex);

            return ErrorHandler.handle(errorParsed);
        }
    }
}

export default new AlertsHandler();
