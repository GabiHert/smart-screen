import UrlBuilder from "../builder/url-builder";
import {webRequestAdapter} from "../adapter/web-request-adapter";
import logger from "../../../utils/logger";
import {NextEventsAdapter} from "../../../../controllers/adapters/next-events-adapter";

class NextEventsUseCase implements NextEventsAdapter {
    async get(): Promise<EventDto[]> {
        logger.info({event: "NextEventsUseCase.get", details: "Process started"})
        const url = UrlBuilder.buildNextEventsRequestUrl()
        const nextEvents = await webRequestAdapter.get(url)
        logger.info({event: "NextEventsUseCase.get", details: "Process finished", nextEvents})
        return nextEvents
    }
}

export default new NextEventsUseCase()