import BlynkApiControlProperties from "../../application/config/blynk-api-control-properties";
import logger from "../../../utils/logger";

class UrlBuilder {

    buildWritePinValueUrl(pin: string): string {
        logger.info({
            event: "UrlBuilder.buildWritePinValueUrl",
            details: "Process started",
            pin
        })

        const url: string = `${BlynkApiControlProperties.BLYNK.URL}${BlynkApiControlProperties.BLYNK.AUTH_TOKEN}/update/${pin}`

        logger.info({event: "UrlBuilder.buildWritePinValueUrl", details: "Process finished", url})
        return url
    }
}

export default new UrlBuilder()