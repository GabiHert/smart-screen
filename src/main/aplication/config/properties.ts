class Properties {
    REACT_NATIVE = {
        FONT: {
            SIZE: {PRIMARY_INFO: 35, SECONDARY_INFO: 25, TERTIARY_INFO: 15},
        },
    }
    WEATHER = {
        URL: "https://api.openweathermap.org/data/2.5/onecall?lat={Lat}&lon={Lon}&exclude=current,minutely,hourly&units=metric&appid={API key}",
        API_KEY: "ca51f0879ac67ae56747f1b3bb517c9c",
        LOCATION: {
            LATITUDE: "-30.0324999",
            LONGITUDE: "-51.2303767",
            CITY_NAME: "Porto Alegre",
            COUNTRY_CODE: "BR",
        }
    }

}

export default new Properties();
