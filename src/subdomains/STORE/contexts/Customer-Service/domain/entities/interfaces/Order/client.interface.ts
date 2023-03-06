import { ClientNameValue, PhoneValue } from "../../../value-objects";
import { IdclientValue } from "../../../value-objects/Sale/Bill/idclient-value/idclient-value";

export interface IClientEntity {

    ClientID: IdclientValue
    Name: ClientNameValue
    Phone: PhoneValue



}
