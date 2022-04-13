import {StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView, Alert} from 'react-native';
import Properties from '../src/main/aplication/config/properties'
import {useFocusEffect} from "@react-navigation/native";
import Call from "../src/main/useCases/call";
import {weatherDailyAdapter} from "../src/main/controllers/adapters/weather-daily-adapter";
import {useEffect, useState} from "react";
import GetImages from "../src/main/useCases/get-images/get-images";
import {weatherAlertsAdapter} from "../src/main/controllers/adapters/weather-alerts-adapter";
import AlertsUiBuilder from "../src/main/useCases/alerts/builder/alerts-ui-builder";
import PROPERTIES from "../src/main/aplication/config/properties";


export default function weather(props: any) {

    const [getDailyForecastOnce, setGetDailyForecastOnce] = useState<boolean>(true)
    const [getAlertsOnce, setGetAlertsOnce] = useState<boolean>(true)
    const [alerts, setAlerts] = useState<any>({})
    const [alertsString, setAlertsString] = useState<string>("")
    const [isMounted, setIsMounted] = useState<boolean>(true);

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
    useEffect(() => {
        setIsMounted(true)               // note mutable flag

        return () => { setIsMounted(false) }; // cleanup toggles value, if unmounted
    }, []);


    useFocusEffect(() => {

        const intervalCurrentDate = setInterval(async () => {

            Call(() => weatherDailyAdapter.getDaily(), dailyForecast, getDailyForecastOnce).then(response => {
                if(!response ||!isMounted) return
                if(response.error){
                    Alert.alert("Weather forecast error",response.error)
                    setGetDailyForecastOnce(false)
                    return
                }
                    setDailyForecast(response.result)
                    setGetDailyForecastOnce(false)
                }
            )

            Call(() => weatherAlertsAdapter.getAlerts(), alerts, getAlertsOnce).then(response => {
                if(!response ||!isMounted) return
                if(response.error){
                    Alert.alert("Weather alerts error",response.error)
                    setGetAlertsOnce(false);
                    return
                }
                setAlerts(response.result);
                setAlertsString(AlertsUiBuilder.build(response.result));
                setGetAlertsOnce(false);

            });


        }, 1000)

        return () => clearInterval(intervalCurrentDate);

    })

    const styles = StyleSheet.create({
        columnsContainer: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "black",
            paddingTop: "2%",
            paddingLeft: "1%",
            paddingBottom: "1%",
        },
        firstRowContainer: {
            flexDirection: "row",
            backgroundColor: "black",
            paddingBottom: "1%",
            paddingLeft: "3%",
            paddingRight: "3%",
            width: "100%",
            flex:1
        },
        buttonContainer: {
            paddingBottom: "0.5%",
            width: "4%"

        },
        weatherForecastContainer: {
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 10,
            paddingLeft: "3%",
            paddingRight: "3%",
            width: "64%"
        },
        weatherForecastTitle: {color: "white", fontSize: Properties.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,    fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY},
        line: {
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            paddingBottom: "4%",
        },
        weatherDescription: {
            paddingTop: "3%",
            paddingRight: "3%",
            color: "white",
            fontSize: Properties.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY
        },
        weatherContainer: {},
        secondWeatherDescription: {color: "white", fontSize: Properties.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO,    fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY},
        temperatureContainer: {

            flexDirection: "row",
        },
        weatherDescriptionImage: {width: 30, height: 30},
        backButtonImage: {width: 32, height: 32},
        space: {},
        alertsView: {backgroundColor: "black", width:"50%"},
        alertsText: {
            color: "white",
            fontSize: Properties.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            width:"75%",
            paddingLeft:"3%",
            paddingRight:"3%"
        }
    })


    return (

        <View style={styles.columnsContainer}>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => props.navigation.navigate("Home")}>
                    <Image style={styles.backButtonImage} source={require("../assets/images/back.png")}/>
                </Pressable>
            </View>


            <View style={styles.firstRowContainer}>
                <View style={styles.weatherForecastContainer}>
                    <Text style={styles.weatherForecastTitle}>Weather Forecast</Text>

                    <View style={styles.line}></View>

                    <SafeAreaView style={styles.columnsContainer}>
                        <ScrollView>


                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[1].weekDay} {dailyForecast[1].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[1].temp.min} to {dailyForecast[1].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[1].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[1].weather.main},{dailyForecast[1].weather.description}</Text>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[2].weekDay} {dailyForecast[2].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[2].temp.min} to {dailyForecast[2].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[2].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[2].weather.main},{dailyForecast[2].weather.description}</Text>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[3].weekDay} {dailyForecast[3].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[3].temp.min} to {dailyForecast[3].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[3].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[3].weather.main},{dailyForecast[3].weather.description}</Text>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[4].weekDay} {dailyForecast[4].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[4].temp.min} to {dailyForecast[4].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[4].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[4].weather.main},{dailyForecast[4].weather.description}</Text>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[5].weekDay} {dailyForecast[5].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[5].temp.min} to {dailyForecast[5].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[5].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[5].weather.main},{dailyForecast[5].weather.description}</Text>
                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.weatherContainer}>
                                <View style={styles.temperatureContainer}>
                                    <Text style={styles.weatherDescription}>{dailyForecast[6].weekDay} {dailyForecast[6].date} -</Text>
                                    <Text
                                        style={styles.weatherDescription}>{dailyForecast[6].temp.min} to {dailyForecast[6].temp.max}</Text>
                                    <Image style={styles.weatherDescriptionImage}
                                           source={GetImages.get(dailyForecast[6].weather.main)}/>
                                </View>
                                <Text
                                    style={styles.secondWeatherDescription}>{dailyForecast[6].weather.main},{dailyForecast[6].weather.description}</Text>
                            </View>
                        </ScrollView>

                    </SafeAreaView>
                </View>


                <SafeAreaView style={styles.alertsView}>
                    <ScrollView>
                    <Text style={styles.alertsText}>{alertsString}</Text>
                    </ScrollView>
                </SafeAreaView>

            </View>

        </View>

    )

}