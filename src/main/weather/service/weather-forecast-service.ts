import axios from "axios"
import weatherForecastUrlBuilder from "../builder/weather-forecast-url-builder";
import PROPERTIES from "../../../main/aplication/config/properties"

class WeatherForecastService {
    async getWeatherForecast() {
        const url = weatherForecastUrlBuilder.build(PROPERTIES.WEATHER.LOCATION.LATITUDE, PROPERTIES.WEATHER.LOCATION.LONGITUDE)

        await axios.get(url).then((response) => {
            console.log(JSON.stringify(response.data, null, 4))
            return response.data
        }).catch((ex) => {
            console.log(ex.message);
        })

    }
}

export default new WeatherForecastService()