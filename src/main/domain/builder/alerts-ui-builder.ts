import logger from "../utils/logger";

class AlertsUiBuilder {
    build(alerts: any[]) {
        logger.info({event: "AlertsUiBuilder.build", description: "Process started", alerts})
        if (!alerts) {
            logger.info({event: "AlertsUiBuilder.build", description: "Process finished", alert: "No Alerts"})
            return ""
        }
        const alertString = `${alerts[0].sender}: ${alerts[0].description}`

        logger.info({event: "AlertsUiBuilder.build", description: "Process finished", alertString})
        return alertString
    }
}

export default new AlertsUiBuilder()