import PROPERTIES from "../../../main/aplication/config/properties"

class WeatherForecastUrlBuilder {
    build(latitude: string, longitude: string): string {
        const url: string = PROPERTIES.WEATHER.URL.replace("{Lat}", latitude)
            .replace("{Lon}", longitude)
            .replace("{API key}", PROPERTIES.WEATHER.API_KEY);
        
        return url
    }

}

export default new WeatherForecastUrlBuilder()