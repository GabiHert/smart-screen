import BlynkHandler from "../../domain/blynk-api-controll/controller/handler/blynk-handler";

export interface BlynkHandlerAdapter {
    writePinValue(pin: string, value: string)
}

export const blynkHandlerAdapter: BlynkHandlerAdapter = BlynkHandler;