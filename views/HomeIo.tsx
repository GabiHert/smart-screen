import {StyleSheet, Text, View, Pressable, Image, Button, Alert} from 'react-native';
import Properties from '../src/main/aplication/config/properties'
import {useState} from "react";

export default function HomeIo(props: any) {

    const [lightButtonColor, setLightButtonColor] = useState("black");
    const [ledButtonColor, setLedButtonColor] = useState("black");

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
            borderColor: "green",
            borderWidth: 2
        },
        buttonContainer: {
            paddingBottom: "0.5%",
            width: "4%"

        },
        backButtonImage: {width: 32, height: 32},

        ledButtonView: {
            width: "20%", height: "30%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: ledButtonColor
        },

        lightButtonView: {
            width: "20%", height: "30%",
            borderWidth: 1.5,
            borderColor: "white",
            borderRadius: 30,
            backgroundColor: lightButtonColor
        },

        space: {paddingRight: "5%"},

        buttonText: {
            fontSize: 50,
            color: "white",
            paddingTop: "15%",
            paddingLeft: "20%"
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
                           }} onPressOut={() => setLightButtonColor("black")}>
                    <Text style={styles.buttonText}>Light</Text>
                </Pressable>
                <View style={styles.space}></View>
                <Pressable style={styles.ledButtonView} onPressIn={() => setLedButtonColor("#7cc0a8")}
                           onPress={() => {
                           }} onPressOut={() => setLedButtonColor("black")}>
                    <Text style={styles.buttonText}>LED</Text>
                </Pressable>
            </View>


        </View>


    )

}