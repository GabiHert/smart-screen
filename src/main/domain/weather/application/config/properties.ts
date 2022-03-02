class PROPERTIES {
    WEATHER = {
        FORECAST_URL:
            "https://api.openweathermap.org/data/2.5/onecall?lat={Lat}&lon={Lon}&exclude=current,minutely,hourly&units=metric&appid={API key}",
        CURRENT_URL:
            "https://api.openweathermap.org/data/2.5/weather?lat={Lat}&lon={Lon}&units=metric&appid={API key}",
        API_KEY: "yourAPIKey",
        LOCATION: {
            LATITUDE: "-30.0324999",
            LONGITUDE: "-51.2303767",
        },
    };
}

export default new PROPERTIES();
