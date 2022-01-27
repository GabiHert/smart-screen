import {DateModel} from "../model/date";
import CurrentDateParser from "../parse/current-date-parser";
import WeekDayBuilder from "./week-day-builder";
import {DateObject} from "../dto/date-object";

class currentDateBuilder {
    build(date): DateModel {
        const dateObject: DateObject = {
            day: date.getDate(),
            month: (date.getMonth() + 1),
            year: date.getFullYear(),
            hour: (date.getHours() - 1),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            weekDay: date.getDay(),
        };

        const currentDate: DateModel = CurrentDateParser.parse(dateObject);

        currentDate.weekDay = WeekDayBuilder.build(dateObject.weekDay)

        return currentDate
    }
}

export default new currentDateBuilder()