import { ClientNameValue, PhoneValue } from "../../value-objects";
import { IdclientValue } from "../../value-objects/Sale/Bill/idclient-value/idclient-value";
import { IClientEntity } from "../interfaces/Order/client.interface";

export class ClientDomainBase  implements IClientEntity {
    ClientID: IdclientValue;
    Name: ClientNameValue;
    Phone: PhoneValue;
}
