import BlynkService from "../../domain/service/BlynkService";
import {BlynkHandlerAdapter} from "../../../../controllers/adapters/blynk-handler-adapter";

class BlynkHandler implements BlynkHandlerAdapter {
    async writePinValue(pin: string, value: string) {
        await BlynkService.writePinValue(pin, value)
    }
}

export default new BlynkHandler()