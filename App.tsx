import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../smart-screen/views/Home"
import Weather from "../smart-screen/views/Weather"
import {StyleSheet} from "react-native";
import HomeIo from "./views/HomeIo";
import AppLoading from "expo-app-loading"
import {
    Exo_100Thin,
    Exo_100Thin_Italic,
    Exo_200ExtraLight,
    Exo_200ExtraLight_Italic,
    Exo_300Light,
    Exo_300Light_Italic,
    Exo_400Regular,
    Exo_400Regular_Italic,
    Exo_500Medium,
    Exo_500Medium_Italic,
    Exo_600SemiBold,
    Exo_600SemiBold_Italic,
    Exo_700Bold,
    Exo_700Bold_Italic,
    Exo_800ExtraBold,
    Exo_800ExtraBold_Italic,
    Exo_900Black,
    Exo_900Black_Italic
} from '@expo-google-fonts/exo'

import {useFonts} from "expo-font"


const Stack = createNativeStackNavigator()

export default function App() {
    let [fontsLoaded,error] = useFonts({    Exo_100Thin,
        Exo_100Thin_Italic,
        Exo_200ExtraLight,
        Exo_200ExtraLight_Italic,
        Exo_300Light,
        Exo_300Light_Italic,
        Exo_400Regular,
        Exo_400Regular_Italic,
        Exo_500Medium,
        Exo_500Medium_Italic,
        Exo_600SemiBold,
        Exo_600SemiBold_Italic,
        Exo_700Bold,
        Exo_700Bold_Italic,
        Exo_800ExtraBold,
        Exo_800ExtraBold_Italic,
        Exo_900Black,
        Exo_900Black_Italic})

    if(!fontsLoaded){
        return <AppLoading/>
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Weather" component={Weather} options={{headerShown: false}}/>
                <Stack.Screen name="HomeIo" component={HomeIo} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};
