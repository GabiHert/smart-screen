import { WeatherForecastDto } from "../../delivery/dto/weather-forecast-dto";
import axios from "axios";
import { WeatherWebServiceAdapter } from "../../domain/adapters/weather-web-service-adapter";
import ForecastUrlBuilder from "../builder/forecast-url-builder";
import PROPERTIES from "../../application/config/properties";
import Logger from "../../../utils/logger";
import CurrentUrlBuilder from "../builder/current-url-builder";
import { CurrentDto } from "../../delivery/dto/current-dto";
import WeatherWebServiceRequestError from "../../domain/exceptions/weather-web-service-request-error";
import WeatherWebServiceApiKeyError from "../../domain/exceptions/weather-web-service-api-key-error";
import WeatherWebServiceFreeSubscriptionError from "../../domain/exceptions/weather-web-service-free-subscription-error";
import WeatherWebServiceNotFoundError from "../../domain/exceptions/weather-web-service-not-found-error";
import WeatherWebServiceServerError from "../../domain/exceptions/weather-web-service-server-error";
import WeatherApiEmptyResponse from "../../domain/exceptions/weather-api-empty-response";

class WeatherWebService implements WeatherWebServiceAdapter {
  private static _instance: WeatherWebService;

  public static getInstance() {
    return this._instance || (this._instance = new WeatherWebService());
  }

  private constructor() {}

  async getForecast(): Promise<WeatherForecastDto> {
    Logger.info({
      event: "WeatherWebService.getForecast",
      status: "Process started",
    });

    const url: string = ForecastUrlBuilder.build(
      PROPERTIES.WEATHER.LOCATION.LATITUDE,
      PROPERTIES.WEATHER.LOCATION.LONGITUDE
    );

    Logger.info({
      event: "WeatherWebService.getForecast",
      status: "got url",
      url,
    });

    const response: Promise<WeatherForecastDto> = await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((ex) => {
        Logger.error({
          event: "WeatherWebService.getForecast",
          status: "Failed",
          error: ex.message,
        });
      });

    Logger.info({
      event: "WeatherWebService.getForecast",
      status: "Process finished",
    });
    return response;
  }

  async getCurrent(): Promise<CurrentDto> {
    Logger.info({
      event: "WeatherWebService.getCurrent",
      status: "Process started",
    });

    const url: string = CurrentUrlBuilder.build(
      PROPERTIES.WEATHER.LOCATION.LATITUDE,
      PROPERTIES.WEATHER.LOCATION.LONGITUDE
    );

    Logger.info({
      event: "WeatherWebService.getForecast",
      status: "got url",
      url,
    });

    const response: Promise<CurrentDto> = await axios
      .get(url)
      .then((response) => {
        if (!response.data) {
          throw new WeatherApiEmptyResponse("Empty weather api response");
        }
        return response.data;
      })
      .catch((ex) => {
        Logger.error({
          event: "WeatherWebService.getCurrent",
          status: "Failed",
          error: ex.message,
          statusHttp: ex.status,
        });

        if (ex.status === 401) {
          throw new WeatherWebServiceApiKeyError(ex.message);
        }
        if (ex.status === 429) {
          throw new WeatherWebServiceFreeSubscriptionError(ex.message);
        }
        if (ex.status === 404) {
          throw new WeatherWebServiceNotFoundError(ex.message);
        }
        if (ex.status === 500) {
          throw new WeatherWebServiceServerError(ex.message);
        }

        throw new WeatherWebServiceRequestError(ex.message);
      });

    Logger.info({
      event: "WeatherWebService.getCurrent",
      status: "Process finished",
    });
    return response;
  }
}

export default WeatherWebService.getInstance();
