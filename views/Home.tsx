import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import PROPERTIES from "../src/main/aplication/config/properties"
import {useEffect, useState} from "react";
import CurrentDate from "../src/main/date/current-date/current-date"
import {DateModel} from "../src/main/date/model/date";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";
import WeatherForecastHandler from "../src/main/weather/handler/weather-forecast-handler"

async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}


changeScreenOrientation();

export default function Home(props: any) {

    const [isActive, setIsActive] = useState<boolean>(true)
    const [gotForecastOnce, setGotForecastOnce] = useState<boolean>(false)
    const [forecast, setForecast] = useState<any>()

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


    useFocusEffect(() => {

        const intervalCurrentDate = setInterval(() => {
            setCurrentDate(CurrentDate.get())
            if (currentDate.hour === "01") {
                setForecast(WeatherForecastHandler.getWeatherForecast())
                setGotForecastOnce(true)
            }
        }, 1000)

        return () => clearInterval(intervalCurrentDate)
    })

    useEffect(() => {
        if (!gotForecastOnce) {
            setForecast(WeatherForecastHandler.getWeatherForecast())
            setGotForecastOnce(true)
        }
    }, [])


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
                            <Text style={styles.temperature}>30°C</Text>
                            <Image
                                style={styles.weatherDescriptionImage}
                                source={require("../assets/images/rain.png")}
                            />
                        </View>
                        <Text style={styles.weatherDescription}>Clear, clear Sky.</Text>
                        <Text style={styles.extremeWeatherConditions}>
                            max. 30°C min 20°C
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
                <View style={styles.spacing}></View>
                <View style={styles.testContainer}></View>
            </View>

            <View style={styles.thirdRowContainer}>
                <View style={styles.homeIoContainer}>
                    <Text style={styles.homeIoText}>Home.io</Text>
                </View>
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
    weatherDescriptionImage: {width: 30, height: 30},
    temperature: {
        color: "white",
        fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
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

