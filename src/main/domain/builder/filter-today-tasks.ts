import {EventModel} from "../../controllers/model/event-model";
import logger from "../utils/logger";

class FilterTodayTasks {
    filter(tasks: EventModel[]) {
        logger.info({event: "FilterTodayTasks.filter", details: "Process started", tasks})
        if (!tasks) {
            logger.info({event: "FilterTodayTasks.filter", details: "Process finished", tasks: "no tasks"})
            return []
        }
        let todayTasks: EventModel[] = []
        const date = new Date()
        tasks.forEach(task => {
            if (task.start.day === (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString())) {
                todayTasks.push(task)
            }
        })
        logger.info({event: "FilterTodayTasks.filter", details: "Process finished", todayTasks})

        return todayTasks
    }
}

export default new FilterTodayTasks()