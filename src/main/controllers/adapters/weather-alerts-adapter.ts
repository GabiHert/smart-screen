import AlertsHandler from "../../domain/weather/delivery/handler/alerts-handler";


export interface WeatherAlertsAdapter {
    getAlerts(): Promise<any>
}

export const weatherAlertsAdapter: WeatherAlertsAdapter = AlertsHandler;