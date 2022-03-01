import DailyHandler from "../../domain/weather/delivery/handler/daily-handler";


export interface WeatherDailyAdapter {
    getDaily(): Promise<any>
}

export const weatherDailyAdapter: WeatherDailyAdapter = DailyHandler;