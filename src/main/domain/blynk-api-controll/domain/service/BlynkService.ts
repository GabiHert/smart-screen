
import UrlBuilder from "../builder/url-builder";
import {blynkWebServiceAdapter} from "../adapters/blynk-web-service-adapter";

class BlynkService{
    async writePinValue(pin:string,value:string){

        const url = UrlBuilder.buildWritePinValueUrl(pin)

        await blynkWebServiceAdapter.putPinValue(url,value)

        return true
    }
}

export default new BlynkService()