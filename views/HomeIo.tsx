import {StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView} from 'react-native';
import Properties from '../src/main/aplication/config/properties'
import {useState} from "react";
import {blynkHandlerAdapter} from "../src/main/controllers/adapters/blynk-handler-adapter";
import Call from "../src/main/useCases/uiCall/call";
import PROPERTIES from "../src/main/aplication/config/properties";

export default function HomeIo(props: any) {

    const [lightButtonColor, setLightButtonColor] = useState("black");
    const [ledButtonColor, setLedButtonColor] = useState("black");
    const [whiteButtonColor, setWhiteButtonColor] = useState("white");
    const [purpleButtonColor, setPurpleButtonColor] = useState("purple");
    const [orangeButtonColor, setOrangeButtonColor] = useState("orange");
    const [randomButtonColor, setRandomButtonColor] = useState("black");
    const [brightnessPlusButtonColor, setBrightnessPlusButtonColor] = useState("black");
    const [brightnessMinusButtonColor, setBrightnessMinusButtonColor] = useState("black");

    const styles = StyleSheet.create({
        columnsContainer: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "black",
            paddingTop: "2%",
            paddingLeft: "1%"
        },
        firstRowContainer: {
            flex: 0.33,
            flexDirection: "row",
            backgroundColor: "black",
            paddingLeft: "3%",
            paddingRight: "3%",

        },
        secondRowContainer: {
            flex: 0.33,
            flexDirection: "row",
            backgroundColor: "black",
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
        buttonContainer: {
            paddingBottom: "0.5%",
            width: "4%"

        },
        backButtonImage: {width: 32, height: 32},

        ledButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: ledButtonColor
        },

        lightButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: lightButtonColor
        },

        brightnessPlusButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: brightnessPlusButtonColor
        },

        brightnessMinusButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: brightnessMinusButtonColor
        },

        orangeButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: orangeButtonColor
        },

        whiteButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: whiteButtonColor
        },

        purpleButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: purpleButtonColor
        },

        randomColorButtonView: {
            width: "20%", height: "70%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: randomButtonColor
        },

        space: {paddingRight: "5%"},

        buttonText: {
            fontSize: 50,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            color: "white",
            paddingTop: "15%",
            paddingLeft: "20%"
        },

        brightnessButtonText: {
            fontSize: 50,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            color: "white",
            paddingTop: "15%",
            paddingLeft: "45%"
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
                <Pressable style={styles.lightButtonView} onPressIn={() => setLightButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.LIGHT_PIN, Properties.BLYNK.TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setLightButtonColor("black")}>
                    <Text style={styles.buttonText}>Light</Text>
                </Pressable>

            </View>

            <View style={styles.secondRowContainer}>

                <Pressable style={styles.ledButtonView} onPressIn={() => setLedButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.LED_PIN, Properties.BLYNK.TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setLedButtonColor("black")}>
                    <Text style={styles.buttonText}>LED</Text>
                </Pressable>

                <View style={styles.space}></View>

                <Pressable style={styles.brightnessPlusButtonView}
                           onPressIn={() => setBrightnessPlusButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.BRIGHTNESS_PLUS_PIN, Properties.BLYNK.BRIGHTNESS_PLUS_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setBrightnessPlusButtonColor("black")}>
                    <Text style={styles.brightnessButtonText}>+</Text>
                </Pressable>

                <View style={styles.space}></View>

                <Pressable style={styles.brightnessMinusButtonView}
                           onPressIn={() => setBrightnessMinusButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.BRIGHTNESS_MINUS_PIN, Properties.BLYNK.BRIGHTNESS_MINUS_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setBrightnessMinusButtonColor("black")}>
                    <Text style={styles.brightnessButtonText}>-</Text>
                </Pressable>

            </View>

            <View style={styles.thirdRowContainer}>

                <Pressable style={styles.whiteButtonView}
                           onPressIn={() => setWhiteButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.WHITE_LED_COLOR_PIN, Properties.BLYNK.COLOR_CHANGE_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setWhiteButtonColor("white")}>
                </Pressable>

                <View style={styles.space}></View>

                <Pressable style={styles.orangeButtonView}
                           onPressIn={() => setOrangeButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.ORANGE_LED_COLOR_PIN, Properties.BLYNK.COLOR_CHANGE_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setOrangeButtonColor("orange")}>
                </Pressable>


                <View style={styles.space}></View>

                <Pressable style={styles.purpleButtonView}
                           onPressIn={() => setPurpleButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.PURPLE_LED_COLOR_PIN, Properties.BLYNK.COLOR_CHANGE_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setPurpleButtonColor("purple")}>
                </Pressable>


                <View style={styles.space}></View>

                <Pressable style={styles.randomColorButtonView}
                           onPressIn={() => setRandomButtonColor("#7cc0a8")}
                           onPress={() => {
                               Call(() => blynkHandlerAdapter.writePinValue(Properties.BLYNK.RANDOM_LED_COLOR_PIN, Properties.BLYNK.COLOR_CHANGE_TRIGGER_VALUE), true, true)
                           }} onPressOut={() => setRandomButtonColor("black")}>
                </Pressable>

            </View>
        </View>


    )

}