import {DateModel} from "../../controllers/model/date-model";
import logger from "../../domain/utils/logger";

async function Call(call, defaultReturn: unknown, callNow: boolean = false, currentDate?: DateModel, whenToCall?: string[]) {
    logger.info({event: "Call", details: "Process started"})
    let shouldCall: boolean = false;

    if (whenToCall && currentDate) {
        const currentTime = `${currentDate.hour}:${currentDate.minute}:${currentDate.second}`

        whenToCall.forEach((timeToCall) => {
            if (currentTime === timeToCall) shouldCall = true
        })
    }

    if (shouldCall || callNow) {
        return await call().then((result) => {
            logger.info({event: "Call", details: "Process finished with resolved promise return"})
            return result
        })
    }
    logger.info({event: "Call", details: "Process finished with default return"})
    return defaultReturn
}

export default Call