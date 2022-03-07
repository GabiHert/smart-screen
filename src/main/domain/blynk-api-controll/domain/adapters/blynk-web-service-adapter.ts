import BlynkWebService from "../../integration/webService/blynk-web-service";

export interface BlynkWebServiceAdapter {
  putPinValue(url:string,value:string):Promise<boolean>
}

export const blynkWebServiceAdapter: BlynkWebServiceAdapter =
  BlynkWebService;
