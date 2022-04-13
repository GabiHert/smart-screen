import {DateModel} from "../controllers/model/date-model";
import logger from "../domain/utils/logger";
import React from "react";
import {Alert} from "react-native";

async function Call(call, defaultReturn: unknown, callNow: boolean = false, currentDate?: DateModel, whenToCall?: string[]) {
        logger.info({event: "Call", details: "Process started", callNow})
        let shouldCall: boolean = false;

        if (whenToCall && currentDate) {
            const currentTime = `${currentDate.hour}:${currentDate.minute}`
            whenToCall.forEach((timeToCall) => {
                if ((currentTime === timeToCall )||( currentTime === `${timeToCall}:00`)) {
                    shouldCall = true
                }
            })
        }

        if (shouldCall || callNow) {

    const callResult =  await call().then((result) => {
        if(result.constructor === Error){

        }
        logger.warn({event: "Call", details: "Process finished with resolved promise return", result})
        return {result, called: true}
    }).catch(error=> {
        logger.warn({event: "Call", details: "Process Error", error})
        return {result: defaultReturn, error: error.message,called: false}
    })
    return callResult

        }
        logger.info({event: "Call", details: "Process finished with default return"})
        return {result: defaultReturn, called: false}

}

export default Call