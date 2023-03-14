import { ClientNameValue, PhoneValue } from "../../value-objects";
import { IdclientValue } from "../../value-objects/Sale/Bill/idclient-value/idclient-value";
import { IClientEntity } from "../interfaces/Order/client.interface";
import { v4 as uuidv4 } from 'uuid';

export class ClientDomainBase  implements IClientEntity {
    ClientID?: string | IdclientValue;
    Name?: string |  ClientNameValue;
    Phone?: number |  PhoneValue;

    
    constructor (_data?: IClientEntity){

        if(_data?.ClientID) this.ClientID = _data.ClientID
        
        else this.ClientID = uuidv4()      

        if (_data?.Name) this.Name = _data.Name;

        if (_data?.Phone) this.Phone = _data.Phone;
    


    }
}
