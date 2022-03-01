import { WeatherForecast } from "../model/weather-forecast";
import WeatherWebService from "../../integration/webservice/weather-web-service";
import { Current } from "../model/current";

export interface WeatherWebServiceAdapter {
  getForecast(): Promise<WeatherForecast>;

  getCurrent(): Promise<Current>;
}

export const weatherWebServiceAdapter: WeatherWebServiceAdapter =
  WeatherWebService;
