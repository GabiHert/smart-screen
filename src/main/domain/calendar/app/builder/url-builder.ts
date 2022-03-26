import Config from "../../config/config";
import logger from "../../../utils/logger";

class UrlBuilder {
    buildTasksRequestUrl() {
        logger.info({event: "UrlBuilder.buildTasksRequestUrl", details: "Process started"})
        const url = `${Config.URL}${Config.TASKS_PATH}`
        logger.info({event: "UrlBuilder.buildTasksRequestUrl", details: "Process finished", url})
        return url

    }

    buildAppointmentsRequestUrl() {
        logger.info({event: "UrlBuilder.buildAppointmentsRequestUrl", details: "Process started"})
        const url = `${Config.URL}${Config.APPOINTMENTS_PATH}`
        logger.info({event: "UrlBuilder.buildAppointmentsRequestUrl", details: "Process finished", url})
        return url

    }

    buildNextEventsRequestUrl() {
        logger.info({event: "UrlBuilder.buildNextEventsRequestUrl", details: "Process started"})
        const url = `${Config.URL}${Config.NEXT_EVENTS_PATH}`
        logger.info({event: "UrlBuilder.buildNextEventsRequestUrl", details: "Process finished", url})
        return url
    }
}

export default new UrlBuilder()