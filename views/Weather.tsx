import {Button, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Properties from '../src/main/aplication/config/properties'

export default function weather(props: any) {

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
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.weatherContainer}>
                        <View style={styles.temperatureContainer}>
                            <Text style={styles.weatherDescription}>Monday </Text>
                            <Text style={styles.weatherDescription}>30°C to 20°C</Text>
                            <Image source={require("../assets/images/clouds.png")}/>
                        </View>
                        <Text style={styles.secondWeatherDescription}>Clear, clear sky</Text>
                    </View>


                </View>

            </View>

        </View>
    )

}