import { ClientNameValue, PhoneValue } from "../../../value-objects";
import { IdclientValue } from "../../../value-objects/Sale/Bill/idclient-value/idclient-value";

export interface IClientEntity {

    ClientID: string | IdclientValue
    Name: ClientNameValue
    Phone: PhoneValue

}
