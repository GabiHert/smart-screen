import logger from "../../../domain/utils/logger";

class AlertsUiBuilder {
    build(alerts: any[]) {
        logger.info({event: "AlertsUiBuilder.build", description: "Process started"})
        if (!alerts) {
            logger.info({event: "AlertsUiBuilder.build", description: "Process finished", alert: "No Alerts"})
            return ""
        }


        let alertsString = ""
        if(!(Symbol.iterator in Object(alerts))) return;
        for (const alert of alerts) {
            const alertString = ` Alert from ${alert.sender}: ${alert.description}`
            alertsString = `${alertsString} ${alertString} \n \n`
        }

        logger.info({event: "AlertsUiBuilder.build", description: "Process started", alertsString})
        return alertsString
    }
}

export default new AlertsUiBuilder()