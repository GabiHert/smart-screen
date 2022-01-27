import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../smart-screen/views/Home"
import Weather from "../smart-screen/views/Weather"
import {StyleSheet} from "react-native";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Weather" component={Weather} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );

};
