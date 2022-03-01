import { DailyForecastDto } from "./daily-forecast-dto";
import { AlertsDto } from "./alerts-dto";

export class WeatherForecastDto {
  daily: DailyForecastDto[];
  alerts: AlertsDto[];
}
