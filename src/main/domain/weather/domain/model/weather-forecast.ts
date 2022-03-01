import { Alerts } from "./alerts";
import { DailyForecast } from "./daily-forecast";

export class WeatherForecast {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  daily: DailyForecast[];
  alerts: Alerts[];
}
