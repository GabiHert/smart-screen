import axios from "axios";
import HeaderBuilder from "../../domain/builder/header-builder";
import InvalidRequestError from "../../domain/exceptions/invalid-request-error";
import BadRequestError from "../../domain/exceptions/bad-request-error";
import {BlynkWebServiceAdapter} from "../../domain/adapters/blynk-web-service-adapter";

class BlynkWebService implements BlynkWebServiceAdapter{
    async putPinValue(url:string,value:string):Promise<boolean>{

        const headers = HeaderBuilder.build()
        await axios.put(url,[value],{headers}).then(
            (response)=>{
                if(response.status === 400){
                   throw new InvalidRequestError(response.data);
                }

                if(response.status === 500){
                    throw new BadRequestError(response.data);
                }
            }
        )

        return true
    }
}

export default new BlynkWebService()