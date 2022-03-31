import { WeatherForecast } from "../model/weather-forecast";
import { Alerts } from "../model/alerts";
import { AlertsParsed } from "../model/alerts-parsed";
import Logger from "../../../utils/logger";

class AlertsForecastParser {
  parse(forecast: WeatherForecast): AlertsParsed[] {
    Logger.info({
      event: "AlertsForecastParser.parse",
      status: "Process started",
    });

    if (forecast.alerts) {
      const alerts: Alerts[] = forecast.alerts;
      const alertsParsed: AlertsParsed[] = [];

      alerts.forEach((alert) => {
        const obj: AlertsParsed = {
          sender: alert.sender_name,
          event: alert.event,
          start: new Date(alert.start * 1000).toLocaleString(),
          end: new Date(alert.end * 1000).toLocaleString(),
          description: alert.description,
          tags: alert.tags,
        };

        alertsParsed.push(obj);
      });

      Logger.info({
        event: "AlertsForecastParser.parse",
        status: "Process finised",
      });

      return alertsParsed;
    }
  }
}

export default new AlertsForecastParser();
