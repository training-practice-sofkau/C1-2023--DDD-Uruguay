import { IdOrdertValueObject } from "../../value-objects/Order";
import { IOrderentity } from "../interfaces/Order/order.interface";
import { ClientDomainBase } from "./client-domain-entity";
import { MangaDomainBase } from "./manga-domain-entity";
import { v4 as uuidv4 } from 'uuid';

export class OrderDomainEntityBase implements IOrderentity {

    client: ClientDomainBase;
    Manga: MangaDomainBase;
    orderId?: string | IdOrdertValueObject
    
    constructor (_data?: IOrderentity){

        if(_data.orderId) this.orderId = _data.orderId
        else this.orderId = uuidv4()

    }

}


