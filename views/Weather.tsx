import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Properties from '../src/main/aplication/config/properties'
import {useFocusEffect} from "@react-navigation/native";
import Call from "../src/main/useCases/uiCall/call";
import {weatherDailyAdapter} from "../src/main/controllers/adapters/weather-daily-adapter";
import {useState} from "react";


export default function weather(props: any) {

    const [getDailyForecastOnce, setGetDailyForecastOnce] = useState<boolean>(true)
    const [dailyForecast, setDailyForecast] = useState<any[]>([{
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }, {
            weekDay: "loading...",
            date: "loading...",
            humidity: 0,
            temp: {
                day: "loading...",
                eve: "loading...",
                max: "loading...",
                min: "loading...",
                morn: "loading...",
                night: "loading...",
            },
            weather: {
                description: "loading...",
                main: "loading...",
            }
        }]
    )

    useFocusEffect(() => {

        const intervalCurrentDate = setInterval(async () => {

            Call(() => weatherDailyAdapter.getDaily(), dailyForecast, getDailyForecastOnce).then(result => {
                    setDailyForecast(result)
                    setGetDailyForecastOnce(false)
                }
            )


        }, 1000)

        return () => clearInterval(intervalCurrentDate);

    })

    const styles = StyleSheet.create({
        columnsContainer: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "black",
            paddingTop: "2%",
            paddingLeft: "1%"
        },
        firstRowContainer: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "black",
            paddingBottom: "1%",
            paddingLeft: "3%",
            paddingRight: "3%",
        },
        secondRowContainer: {
            flex: 0.33,
            flexDirection: "row",
            backgroundColor: "black",
            paddingBottom: "3%",
            paddingLeft: "3%",
            paddingRight: "3%",
        },
        thirdRowContainer: {
            flex: 0.33,
            flexDirection: "row",
            backgroundColor: "black",
            paddingBottom: "3%",
            paddingLeft: "3%",
            paddingRight: "3%",
            borderColor: "white",
            borderWidth: 2
        },
        buttonContainer: {
            paddingBottom: "0.5%",
            width: "4%"

        },
        weatherForecastContainer: {
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 10,
            flex: 0.6,
            paddingLeft: "3%",
            paddingRight: "3%"
        },
        weatherForecastTitle: {color: "white", fontSize: Properties.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO},
        line: {
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingBottom: "1%",
        },
        weatherDescription: {
            paddingTop: "3%",
            paddingRight: "3%",
            color: "white",
            fontSize: Properties.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO
        },
        weatherContainer: {},
        secondWeatherDescription: {color: "white", fontSize: Properties.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO},
        temperatureContainer: {

            flexDirection: "row",
        }

    })


    return (
        <View style={styles.columnsContainer}>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => props.navigation.navigate("Home")}>
                    <Image source={require("../assets/images/back.png")}/>
                </Pressable>
            </View>

            <View style={styles.firstRowContainer}>
                <View style={styles.weatherForecastContainer}>
                    <Text style={styles.weatherForecastTitle}>Weather Forecast</Text>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[1].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[1].temp.min} to {dailyForecast[1].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[1].weather.main},{dailyForecast[1].weather.description}</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[2].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[2].temp.min} to {dailyForecast[2].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[2].weather.main},{dailyForecast[2].weather.description}</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[3].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[3].temp.min} to {dailyForecast[3].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[3].weather.main},{dailyForecast[3].weather.description}</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[4].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[4].temp.min} to {dailyForecast[4].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[4].weather.main},{dailyForecast[4].weather.description}</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[5].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[5].temp.min} to {dailyForecast[5].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[5].weather.main},{dailyForecast[5].weather.description}</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>{dailyForecast[6].weekDay} </Text>
                            <Text
                                style={styles.weatherDescription}>{dailyForecast[6].temp.min} to {dailyForecast[6].temp.max}</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text
                            style={styles.secondWeatherDescription}>{dailyForecast[6].weather.main},{dailyForecast[6].weather.description}</Text>
                    </View>


                </View>

            </View>

        </View>
    )

}