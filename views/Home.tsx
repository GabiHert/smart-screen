import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import PROPERTIES from "../src/main/aplication/config/properties"
import {useEffect, useState} from "react";
import {DateAdapter} from "../src/main/controllers/adapters/date-adapter";
import {weatherCurrentAdapter} from "../src/main/controllers/adapters/weather-current-adapter";
import {DateModel} from "../src/main/domain/date/model/date-model";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";
import Call from "../src/main/useCases/uiCall/call"
import {weatherDailyAdapter} from "../src/main/controllers/adapters/weather-daily-adapter";
import GetImages from "../src/main/useCases/get-images/get-images";

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}


changeScreenOrientation();

export default function Home(props: any) {

    const [getCurrentForecastOnce, setGetCurrentForecastOnce] = useState<boolean>(true)
    const [getDailyForecastOnce, setGetDailyForecastOnce] = useState<boolean>(true)
    const [currentForecast, setCurrentForecast] = useState<any>({
            main: {
                feels_like: "-",
                humidity: 0,
                temp: "-",
                temp_max: "-",
                temp_min: "-",
            },
            weather: {
                description: "-",
                main: "-",
            },
        }
    )

    const [dailyForecast, setDailyForecast] = useState<any[]>([{
            weekDay: "-",
            date: "-",
            humidity: 0,
            temp: {
                day: "-",
                eve: "-",
                max: "-",
                min: "-",
                morn: "-",
                night: "-",
            },
            weather: {
                description: "-",
                main: "-",
            }
        }]
    )

    const [currentDate, setCurrentDate] = useState<DateModel>({
        day: "",
        hour: "",
        minute: "",
        month: "",
        second: "",
        weekDay: "",
        year: ""
    });

    function goToWeatherComponent() {

        props.navigation.navigate("Weather")

    }

    function goToHomeIoComponent() {
        props.navigation.navigate("HomeIo")
    }

    useFocusEffect(() => {

        const intervalCurrentDate = setInterval(async () => {
            setCurrentDate(DateAdapter.getCurrentDate())

            Call(() => weatherCurrentAdapter.getCurrent(), currentForecast, getCurrentForecastOnce, currentDate, ["", ""]).then(result => {
                    setCurrentForecast(result)
                    setGetCurrentForecastOnce(false)
                }
            )

            Call(() => weatherDailyAdapter.getDaily(), dailyForecast, getDailyForecastOnce, currentDate, ["", ""]).then(result => {
                    setDailyForecast(result)
                    setGetDailyForecastOnce(false)
                }
            )


        }, 1000)

        return () => clearInterval(intervalCurrentDate);

    })


    return (

        <View style={styles.columnsContainer}>

            <View style={styles.firstRowContainer}>
                <View style={styles.clock}>
                    <Text style={styles.clockText}>{currentDate.hour}:{currentDate.minute}:{currentDate.second}</Text>
                    <Text style={styles.clockWeekDay}>{currentDate.weekDay}</Text>
                    <Text style={styles.clockDate}>{currentDate.day}/{currentDate.month}/{currentDate.year}</Text>
                </View>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
                <View style={styles.spacing}></View>
                <View style={styles.calendarContainer}>
                    <Text style={styles.calendarDate}>{currentDate.day}/{currentDate.month}/{currentDate.year}</Text>
                    <Text style={styles.calendarEvent}>dd/mm - Nome do Evento</Text>
                    <Text style={styles.calendarEvent}>dd/mm - Nome do Evento</Text>
                    <Text style={styles.calendarEvent}>+3</Text>
                </View>
            </View>

            <View style={styles.secondRowContainer}>
                <TouchableWithoutFeedback onPress={() => {
                    goToWeatherComponent()
                }}>
                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.temperature}>{currentForecast.main.temp}</Text>
                            <Image
                                style={styles.weatherDescriptionImage}
                                source={GetImages.get(currentForecast.weather.main)}
                            />

                        </View>
                        <Text style={styles.weatherDescription}>{currentForecast.weather.description}</Text>
                        <Text style={styles.extremeWeatherConditions}>
                            from {dailyForecast[0].temp.min} to {dailyForecast[0].temp.max}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
            </View>

            <View style={styles.thirdRowContainer}>
                <TouchableWithoutFeedback onPress={() => goToHomeIoComponent()}>
                    <View style={styles.homeIoContainer}>
                        <Text style={styles.homeIoText}>Home.io</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    spacing: {paddingRight: "3%"},
    testContainer: {
        width: "27%",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 10,
        flex: 0.33,
        alignContent: "center",
        justifyContent: "center",
    },
    columnsContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black",
    },
    firstRowContainer: {
        flex: 0.33,
        flexDirection: "row",
        backgroundColor: "black",
        paddingTop: "3%",
        paddingBottom: "3%",
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
    },
    clock: {
        width: "33%",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 10,
        flex: 0.33,
        alignContent: "center",
        justifyContent: "center",
    },
    clockText: {
        flex: 0.33,
        paddingLeft: "24%",
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,

    },
    clockWeekDay: {
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
        flex: 0.33,
        paddingLeft: "3%",
        color: "white",
    },
    clockDate: {
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
        flex: 0.33,
        paddingLeft: "3%",
        color: "white",
    },
    temperatureContainer: {
        flex: 0.5,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    weatherContainer: {
        width: "27%",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 10,
        flex: 0.33,
    },
    extremeWeatherConditions: {flex: 0.33, color: "white", fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO},
    weatherDescription: {flex: 0.33, color: "white", fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO},
    weatherDescriptionImage: {width: 32, height: 32},
    temperature: {
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
        paddingRight: "3%"
    },
    homeIoContainer: {
        width: "27%",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 10,
        flex: 0.33,
        alignContent: "center",
        justifyContent: "center",
    },
    homeIoText: {
        paddingLeft: "25%",
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,

    },
    calendarContainer: {
        width: "27%",
        borderWidth: 1.5,
        borderColor: "white",
        borderRadius: 10,
        flex: 0.33,
    },
    calendarDate: {
        paddingLeft: "3%",
        flex: 0.70,
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
    },
    calendarEvent: {
        paddingLeft: "3%",
        flex: 0.30,
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO,
        borderTopColor: "white",
        borderRadius: 5,
        borderWidth: 1,
    },
});

