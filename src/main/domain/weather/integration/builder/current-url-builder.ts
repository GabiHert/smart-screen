import PROPERTIES from "../../application/config/properties";

class CurrentUrlBuilder {
  build(latitude: string, longitude: string): string {
    const url: string = PROPERTIES.WEATHER.CURRENT_URL.replace(
      "{Lat}",
      latitude
    )
      .replace("{Lon}", longitude)
      .replace("{API key}", PROPERTIES.WEATHER.API_KEY);

    return url;
  }
}

export default new CurrentUrlBuilder();
