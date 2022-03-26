import UrlBuilder from "../builder/url-builder";
import {webRequestAdapter} from "../adapter/web-request-adapter";
import logger from "../../../utils/logger";
import {AppointmentAdapter} from "../../../../controllers/adapters/appointment-adapter";

class AppointmentUseCase implements AppointmentAdapter {
    async get(): Promise<EventModel[]> {
        logger.info({event: "AppointmentUseCase.get", details: "Process started"})
        const url = UrlBuilder.buildAppointmentsRequestUrl()
        const appointments = await webRequestAdapter.get(url)
        logger.info({event: "AppointmentUseCase.get", details: "Process finished", appointments})
        return appointments
    }
}


export default new AppointmentUseCase()