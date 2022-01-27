import WeatherForecastService from "../service/weather-forecast-service"

class WeatherForecastHandler {
    async getWeatherForecast() {
        console.log("WeatherForecastHandler.getWeatherForecast executed")

        const forecast = await WeatherForecastService.getWeatherForecast()

        console.log("WeatherForecastHandler.getWeatherForecast. Got response" + JSON.stringify(forecast))
        return forecast


    }
}

export default new WeatherForecastHandler()