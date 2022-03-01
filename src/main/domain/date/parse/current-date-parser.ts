import {DateModel} from "../model/date-model";
import {DateObject} from "../dto/date-object"

class CurrentDateParser {
    parse(date: DateObject): DateModel {
        let currentDate: DateModel = {day: "", hour: "", minute: "", month: "", second: "", weekDay: "", year: ""}

        if (date.day < 10) {
            currentDate.day = `0${date.day}`;
        } else {
            currentDate.day = date.day.toString()
        }

        if (date.month < 10) {
            currentDate.month = `0${date.month}`;
        } else {
            currentDate.month = date.month.toString()
        }

        if (date.hour < 10) {
            currentDate.hour = `0${date.hour}`;
        } else {
            currentDate.hour = date.hour.toString()
        }

        if (date.minute < 10) {
            currentDate.minute = `0${date.minute}`;
        } else {
            currentDate.minute = date.minute.toString()
        }

        if (date.second < 10) {
            currentDate.second = `0${date.second}`;
        } else {
            currentDate.second = date.second.toString()
        }

        currentDate.year = date.year.toString()


        return {...currentDate}
    }
}

export default new CurrentDateParser()