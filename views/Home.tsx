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
    const [getDailyForecastOnce, setGetDailyForecastOnce] = useState<boolean>(true);
    const [getEventsOnce, setGetEventsOnce] = useState<boolean>(true);
    const [getTasksOnce, setGetTasksOnce] = useState<boolean>(true);
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

    const [dailyForecast, setDailyForecast] = useState<any[]>([{
            weekDay: '-',
            date: '-',
            humidity: 0,
            temp: {
                day: '-',
                eve: '-',
                max: '-',
                min: '-',
                morn: '-',
                night: '-',
            },
            weather: {
                description: '-',
                main: '-',
            },
        }],
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
    const [todayTasks, setTodayTasks] = useState<EventModel[]>([]);
    const [tomorrowTasks, setTomorrowTasks] = useState<EventModel[]>([]);
    const [tasks, setTasks] = useState<EventModel[]>([]);

    function resetUseState(){

        setGetCurrentForecastOnce(true)
        setGetTasksOnce(true)
        setGetDailyForecastOnce(true)
        setGetEventsOnce(true)
    }

    function goToWeatherComponent() {

        resetUseState()
        props.navigation.navigate('Weather');

    }

    function goToLockComponent() {
        resetUseState()
        if(!isMounted) return
        props.navigation.navigate('Lock');

    }

    function goToHomeIoComponent() {
        if(!isMounted) return
        resetUseState()
        props.navigation.navigate('HomeIo');
    }

    useEffect(() => {
        setIsMounted(true)               // note mutable flag
        return () => { setIsMounted(false) }; // cleanup toggles value, if unmounted
    }, []);


    const styles = StyleSheet.create({
        spacing: { paddingRight: '5%' },
        testContainer: {
            width: '27%',
            borderWidth: 1.5,
            borderColor: 'white',
            borderRadius: 10,
            flex: 0.33,
            alignContent: 'center',
            justifyContent: 'center',
        },
        firstColumnsContainer: {
            flex: 0.33,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        firstColumnsView: { flex: 0.33, paddingLeft: '5%', paddingBottom: '3%', paddingTop: '3%' },
        calendarView: { flex: 0.75, paddingLeft: '5%', paddingBottom: '3%', paddingTop: '3%' },
        secondColumnsContainer: {
            flex: 0.33,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        secondColumnsView: { flex: 0.33, paddingLeft: '5%', paddingBottom: '3%', paddingTop: '3%' },
        thirdColumnsContainer: {
            flex: 0.33,
            flexDirection: 'column',
            backgroundColor: 'black',
        },
        thirdColumnsView: { flex: 0.33, paddingLeft: '5%', paddingBottom: '3%', paddingTop: '3%' },

        rowContainer: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'black',
        },
        clock: {
            width: '95%',
            borderWidth: 1.5,
            borderColor: 'white',
            borderRadius: 10,
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        },
        clockText: {
            flex: 0.33,
            paddingLeft: '30%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,


        },
        clockWeekDay: {
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            flex: 0.33,
            paddingLeft: '3%',
            color: 'white',
        },
        clockDate: {
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            flex: 0.33,
            paddingLeft: '3%',
            color: 'white',
        },
        temperatureContainer: {
            flex: 0.5,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
        },
        weatherContainer: {
            width: '95%',
            borderWidth: 1.5,
            borderColor: 'white',
            borderRadius: 10,
            flex: 1,
        },
        extremeWeatherConditions: {
            flex: 0.33,
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY
        },
        weatherDescription: { flex: 0.33, color: 'white', fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY },
        weatherDescriptionImage: { width: 32, height: 32 },
        temperature: {
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            paddingRight: '3%',
        },
        homeIoContainer: {
            width: '95%',
            borderWidth: 1.5,
            borderColor: 'white',
            borderRadius: 10,
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
        },
        homeIoText: {
            paddingLeft: '25%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY
        },
        calendarContainer: {
            width: '95%',
            borderWidth: 1.5,
            borderColor: 'white',
            borderRadius: 10,
            flex: 1,
        },
        calendarDate: {
            paddingLeft: '3%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.PRIMARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY
        },
        calendarDescription: {
            paddingLeft: '3%',
            flex: 0.25,
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.SECONDARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY
        },
        calendarEvent: {
            paddingLeft: '3%',
            paddingTop: '3%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            borderTopColor: 'white',
            borderRadius: 5,
            borderWidth: 1,
        },
        todayTasksView: {
            paddingTop: '50%',
            flex: 0.6,
        },

        taskView: {
            flexDirection: 'row',
            paddingBottom: '5%',
        },

        todayTasks: {
            flex: 0.9,
            paddingTop: '3%',
            paddingBottom: '4%',
            color: 'white',
            fontSize: PROPERTIES.REACT_NATIVE.FONT.SIZE.TERTIARY_INFO,
            fontFamily:PROPERTIES.REACT_NATIVE.FONT.FAMILY,
            borderBottomColor: 'white',
            borderRadius: 5,
            borderWidth: 1,
        },

        doneTaskButton: {
            flex: 0.06,
            backgroundColor: 'black',
            borderColor: 'white',
            borderRadius: 10,
            borderWidth: 1,
            alignContent: 'center',
            height: 25,

        },
    });

    useFocusEffect(() => {

        const intervalCurrentDate = setInterval(async () => {
            setCurrentDate(DateAdapter.getCurrentDate());

            Call(() => weatherCurrentAdapter.getCurrent(), currentForecast, getCurrentForecastOnce, currentDate, PROPERTIES.TIME.HALF_HOURLY).then(response => {
                if(!isMounted || !response) return
                if(response.error){
                    Alert.alert("Current forecast error",response.error)
                    setGetCurrentForecastOnce(false);
                    return;
                }

                setCurrentForecast(response.result);
                setGetCurrentForecastOnce(false);

                }

            );

            Call(() => weatherDailyAdapter.getDaily(), dailyForecast, getDailyForecastOnce, currentDate, PROPERTIES.TIME.HOURLY).then(response => {
                if(!isMounted || !response) return
                if(response.error){
                    Alert.alert("Daily forecast error",response.error)
                    setGetDailyForecastOnce(false);
                    return;
                }
                setDailyForecast(response.result);
                    setGetDailyForecastOnce(false);
                },
            );

            Call(() => nextEventsAdapter.get(), events, getEventsOnce, currentDate, PROPERTIES.TIME.QUARTER_HOURLY).then(response => {
                if(!isMounted || !response) return
                if(response.error){
                    Alert.alert("Next Events error",response.error)
                    setGetEventsOnce(false);
                    return
                }
                setEvents(response.result);
                setGetEventsOnce(false);
            });

            Call(() => taskAdapter.get(), tasks, getTasksOnce, currentDate, PROPERTIES.TIME.QUARTER_HOURLY).then(response => {
                if(!isMounted || !response) return
                if(response.error){
                    Alert.alert("Next Events error",response.error)
                    setGetTasksOnce(false);
                    return
                }
                setTasks(response.result);
                setTodayTasks(FilterTasks.today(response.result))
                setTomorrowTasks(FilterTasks.tomorrow(response.result))
                setGetTasksOnce(false);
            });

        }, 1000);

        const timeout = setTimeout(()=>{goToLockComponent()},30000)

        return () => {
            clearInterval(intervalCurrentDate)
            clearTimeout(timeout)
        };

    });


    return (
        <SafeAreaView style={styles.rowContainer}>
            <View style={styles.firstColumnsContainer}>

                <View style={styles.firstColumnsView}>
                    <View style={styles.clock}>
                        <Text
                            style={styles.clockText}>{currentDate.hour}:{currentDate.minute}</Text>
                        <Text style={styles.clockWeekDay}>{currentDate.weekDay}</Text>
                        <Text style={styles.clockDate}>{currentDate.day}/{currentDate.month}/{currentDate.year}</Text>
                    </View>
                </View>

                <View style={styles.secondColumnsView}>
                    <TouchableWithoutFeedback onPress={() => {
                        goToWeatherComponent();
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

                </View>

                <View style={styles.thirdColumnsView}>
                    <TouchableWithoutFeedback onPress={() => goToHomeIoComponent()}>
                        <View style={styles.homeIoContainer}>
                            <Text style={styles.homeIoText}>Home.io</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>


            <View style={styles.secondColumnsContainer}>
                <SafeAreaView style={styles.todayTasksView}>
                    <ScrollView>
                        {todayTasks.map((task, idx) => <View style={styles.taskView} key={idx}>
                            <TouchableWithoutFeedback onPress={() => {
                                Alert.alert('Delete task', `Are you sure you want to delete ${task.title} ?`, [{ text: 'Cancel' }, {
                                    text: 'Yes',
                                    onPress: () => {
                                        //TODO: DELETE TASK
                                    },
                                }]);
                            }}><View
    style={styles.doneTaskButton}/>
                            </TouchableWithoutFeedback>

                            <View style={styles.spacing}/>

                            <Text
                                style={styles.todayTasks} key={idx}>Today - {task.title}</Text></View>)}

                        {tomorrowTasks.map((task, idx) => <View style={styles.taskView} key={idx}>
                            <TouchableWithoutFeedback onPress={() => {
                                Alert.alert('Delete task', `Are you sure you want to delete ${task.title} ?`, [{ text: 'Cancel' }, {
                                    text: 'Yes',
                                    onPress: () => {
                                        //TODO: DELETE TASK
                                    },
                                }]);
                            }}><View
    style={styles.doneTaskButton}/>
                            </TouchableWithoutFeedback>

                            <View style={styles.spacing}/>

                            <Text
                                style={styles.todayTasks} key={idx}>Tomorrow - {task.title}</Text></View>)}
                    </ScrollView>
                </SafeAreaView>

            </View>

            <View style={styles.thirdColumnsContainer}>
                <View style={styles.calendarView}>
                    <View style={styles.calendarContainer}>
                        <Text
                            style={styles.calendarDate}>{currentDate.day}/{currentDate.month}/{currentDate.year}
                        </Text>

                        <SafeAreaView style={{ flex: 1 }}>
                            <ScrollView>
                                {events.map((event, idx) => {
                                        return (<Text
                                            style={styles.calendarEvent}
                                            key={idx}
                                        >{event.start.day}/{event.start.month} {event.title}</Text>);
                                    },
                                )
                                }
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

