import UrlBuilder from "../builder/url-builder";
import {webRequestAdapter} from "../adapter/web-request-adapter";
import logger from "../../../utils/logger";
import {TaskAdapter} from "../../../../controllers/adapters/task-adapter";

class TaskUseCase implements TaskAdapter {
    async get(): Promise<EventDto[]> {
        logger.info({event: "TaskUseCase.get", details: "Process started"})
        const url = UrlBuilder.buildNextEventsRequestUrl()
        const tasks = await webRequestAdapter.get(url)
        logger.info({event: "TaskUseCase.get", details: "Process finished", tasks,})
        return tasks
    }
}

export default new TaskUseCase()