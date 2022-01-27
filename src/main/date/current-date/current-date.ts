import CurrentDateBuilder from "../builder/current-date-builder";
import {DateModel} from "../model/date"


class CurrentDate {

    get(): DateModel {
        console.log("CurrentDate.get() called")
        const currentDate: DateModel = CurrentDateBuilder.build(new Date())

        return currentDate;
    }
}

export default new CurrentDate()

