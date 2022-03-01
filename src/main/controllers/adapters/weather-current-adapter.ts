import CurrentHandler from "../../domain/weather/delivery/handler/current-handler";


export interface WeatherCurrentAdapter {
    getCurrent(): Promise<any>
}

export const weatherCurrentAdapter: WeatherCurrentAdapter = CurrentHandler;