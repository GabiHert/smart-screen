import {EventModel} from "../../controllers/model/event-model";
import logger from "../utils/logger";

class FilterTasks {
    today(tasks: EventModel[]) {
        logger.info({event: "FilterTasks.today", details: "Process started", tasks})
        if (!tasks) {
            logger.info({event: "FilterTasks.today", details: "Process finished", tasks: "no tasks"})
            return []
        }
        let todayTasks: EventModel[] = []
        const date = new Date()
        tasks.forEach(task => {
            if (task.start.day === (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString())) {
                todayTasks.push(task)
            }
        })
        logger.info({event: "FilterTasks.today", details: "Process finished", todayTasks})

        return todayTasks
    }

    tomorrow(tasks: EventModel[]){
        logger.info({event: "FilterTasks.tomorrow", details: "Process started", tasks})
        if (!tasks) {
            logger.info({event: "FilterTasks.tomorrow", details: "Process finished", tasks: "no tasks"})
            return []
        }
        let tomorrowTasks: EventModel[] = []
        const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).getDate()
        tasks.forEach(task => {
            if (task.start.day === (tomorrow < 10 ? `0${tomorrow}` : tomorrow.toString())) {
                tomorrowTasks.push(task)
            }
        })
        logger.info({event: "FilterTasks.tomorrow", details: "Process finished", tomorrowTasks})

        return tomorrowTasks
    }
}

export default new FilterTasks()