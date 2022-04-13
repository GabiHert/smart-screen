import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PROPERTIES from '../src/main/aplication/config/properties';
import React, {useEffect, useState} from 'react';
import { DateAdapter } from '../src/main/controllers/adapters/date-adapter';
import { weatherCurrentAdapter } from '../src/main/controllers/adapters/weather-current-adapter';
import { DateModel } from '../src/main/domain/date/model/date-model';
import { useFocusEffect } from '@react-navigation/native';
import Call from '../src/main/useCases/call';
import { weatherDailyAdapter } from '../src/main/controllers/adapters/weather-daily-adapter';
import GetImages from '../src/main/useCases/get-images';
import ChangeScreenOrientation from '../src/main/useCases/change-screen-orientation';
import { EventModel } from '../src/main/controllers/model/event-model';
import { nextEventsAdapter } from '../src/main/controllers/adapters/next-events-adapter';
import { taskAdapter } from '../src/main/controllers/adapters/task-adapter';
import FilterTasks from "../src/main/domain/builder/filter-tasks";



export default function Home(props: any) {


    ChangeScreenOrientation.lockHorizontal();


    const [getCurrentForecastOnce, setGetCurrentForecastOnce] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState<boolean>(true);
    const [getEventsOnce, setGetEventsOnce] = useState<boolean>(true);
    const [currentForecast, setCurrentForecast] = useState<any>({
            main: {
                feels_like: '-',
                humidity: 0,
                temp: '-',
                temp_max: '-',
                temp_min: '-',
            },
            weather: {
                description: '-',
                main: '-',
            },
        },
    );
    const [currentDate, setCurrentDate] = useState<DateModel>({
        day: '',
        hour: '',
        minute: '',
        month: '',
        second: '',
        weekDay: '',
        year: '',
    });

    const [events, setEvents] = useState<EventModel[]>([]);

    function resetUseState(){
        setGetCurrentForecastOnce(true)
        setGetEventsOnce(true)
    }

    function goToHomeComponent() {

        resetUseState()
        props.navigation.navigate('Home');

    }
    useEffect(() => {
        setIsMounted(true)               // note mutable flag
        return () => { setIsMounted(false) }; // cleanup toggles value, if unmounted
    }, []);

  useFocusEffect(() => {

        const intervalCurrentDate = setInterval(async () => {
            setCurrentDate(DateAdapter.getCurrentDate());

            Call(() => weatherCurrentAdapter.getCurrent(), currentForecast, getCurrentForecastOnce, currentDate, PROPERTIES.TIME.HALF_HOURLY).then(response => {

                if(!response ||!isMounted) return
                if(response.error){
                    setGetCurrentForecastOnce(false);
                    Alert.alert("Current Forecast Error",response.error)
                    return
                }

                    setCurrentForecast(response.result);
                    setGetCurrentForecastOnce(false);
                },
            );

            Call(() => nextEventsAdapter.get(), events, getEventsOnce, currentDate, PROPERTIES.TIME.QUARTER_HOURLY).then(response => {

                if(!isMounted || !response) return
                if(response.error){
                    Alert.alert("Current Forecast Error",response.error)
                    setGetEventsOnce(false);
                    return
                }
                setEvents(response.result);
                setGetEventsOnce(false);
            });

        }, 700);

        return () => clearInterval(intervalCurrentDate);

    });

    const styles = StyleSheet.create({
        clockTextContainer: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        firstColumnsContainer: {
            flex: 0.5,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        secondColumnsContainer: {
            flex: 0.5,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        firstColumnsView: { flex: 1, paddingLeft: '5%',paddingRight:"10%"},
        container:{flex:1},
        firstRowContainer:{
            flex:0.5,
            backgroundColor:"black"
        },
        secondRowContainer:{
            flex:0.5,
            flexDirection:"row",
            backgroundColor:"green"
        },
        clockText:{fontSize:200, fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY, color:"white",paddingLeft:"2%",paddingTop:"2%",borderBottomColor:"white",borderWidth:1},
        clockWeekDay:{fontSize:PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO, fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY, color:"white", paddingLeft:"20%", paddingBottom:"1%"},
        temperature: {
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            paddingLeft: '40%',
        },
        weatherDescriptionImage: { width: 52, height: 52 },
        calendarEvent: {
            paddingLeft: '3%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            borderBottomColor: 'white',
            borderWidth: 1,
        },
        spacing: { paddingRight: '5%' },
    });

    return (
               <SafeAreaView style={styles.container}>
           <View style={styles.firstRowContainer}>
               <TouchableWithoutFeedback onPress={()=>{goToHomeComponent()}}>

                <View style = {styles.firstColumnsView}>
                    <View style={styles.clockTextContainer}>
                        <Text
                            style={styles.clockText}>{currentDate.hour}:{currentDate.minute}:{currentDate.second}</Text>
                    </View>
                </View>
               </TouchableWithoutFeedback>
           </View>
           <View style={styles.secondRowContainer}>
               <TouchableWithoutFeedback onPress={()=>{goToHomeComponent()}}>
               <View style={styles.firstColumnsContainer}>

                   <Text style={styles.clockWeekDay}>{currentDate.weekDay}   {currentDate.day}/{currentDate.month}/{currentDate.year}</Text>

                    <View style = {styles.secondRowContainer}>
                        <View style={styles.firstColumnsContainer}>
                            <Text style={styles.temperature}>{currentForecast.main.temp}</Text>
                        </View>

                        <View style={styles.secondColumnsContainer}>
                            <Image
                                style={styles.weatherDescriptionImage}
                                source={GetImages.get(currentForecast.weather.main)}
                            />
                        </View>
                    </View>

               </View>
               </TouchableWithoutFeedback>

               <View style={styles.secondColumnsContainer}>
                   <SafeAreaView style={{ flex: 0.9, paddingTop:"2%" }}>
                       <ScrollView>
                           {events.map((event, idx) => {
                                   return (<View  style={{paddingBottom:"4%", width:"80%"}} key={idx}><Text
                                       style={styles.calendarEvent}
                                       key={idx}
                                   >{event.start.day}/{event.start.month} {event.title}</Text>
                                       </View>
                                   );
                               },
                           )
                           }
                       </ScrollView>
                   </SafeAreaView>
               </View>
           </View>
               </SafeAreaView>



    );
}

