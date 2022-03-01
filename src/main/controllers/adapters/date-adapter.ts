import {DateModel} from "../model/date-model";
import currentDate from "../../domain/date/current-date/current-date";

export interface DateAdapter {
    getCurrentDate(): DateModel
}

export const DateAdapter: DateAdapter = currentDate;