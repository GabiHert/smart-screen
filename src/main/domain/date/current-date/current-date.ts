import CurrentDateBuilder from "../builder/current-date-builder";
import {DateModel} from "../model/date-model"
import {DateAdapter} from "../../../controllers/adapters/date-adapter";


class CurrentDate implements DateAdapter {

    getCurrentDate(): DateModel {
        console.log("CurrentDate.get() called")
        const currentDate: DateModel = CurrentDateBuilder.build(new Date())

        return currentDate;
    }
}

export default new CurrentDate()

