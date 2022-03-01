import { WeatherForecast } from "../model/weather-forecast";
import WeekDayBuilder from "../builder/week-day-builder";
import Logger from "../utils/logger";
import { DailyForecastParsed } from "../model/dailly-forecast-parsed";

class DailyForecastParser {
  parse(forecast: WeatherForecast): DailyForecastParsed[] {
    Logger.info({
      event: "DailyForecastParser.parse",
      status: "Process started",
    });
    const dailyForecast: DailyForecastParsed[] = [];

    forecast.daily.forEach((day) => {
      const daily: DailyForecastParsed = {
        weekDay: WeekDayBuilder.build(day.dt * 1000),
        date: new Date(day.dt * 1000).toLocaleDateString("pt-BR"),
        humidity: day.humidity,
        temp: {
          day: `${day.temp.day}°C`,
          eve: `${day.temp.eve}°C`,
          max: `${day.temp.max}°C`,
          min: `${day.temp.min}°C`,
          morn: `${day.temp.morn}°C`,
          night: `${day.temp.night}°C`,
        },
        weather: {
          description: day.weather[0].description,
          main: day.weather[0].main,
        },
      };
      dailyForecast.push(daily);
    });

    Logger.info({
      event: "DailyForecastParser.parse",
      status: "Process finised",
    });
    return dailyForecast;
  }
}

export default new DailyForecastParser();
