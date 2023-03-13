import { DateValue } from "../../value-objects/Sale/Bill/date-value/date-value";
import { IdbillValue } from "../../value-objects/Sale/Bill/idbill-value/idbill-value";
import { IdclientValue } from "../../value-objects/Sale/Bill/idclient-value/idclient-value";

import { PaymentAmountValue } from "../../value-objects/Sale/Bill/payment-amount-value/payment-amount-value";
import { PaymentMethodValue } from "../../value-objects/Sale/Bill/payment-method-value/payment-method-value";
import { TotalValue } from "../../value-objects/Sale/Bill/total-value/total-value";
import { IBillEntity } from "../interfaces/Sale/bill.interface";
import { v4 as uuidv4 } from 'uuid';
import { IdmangaValue } from "../../value-objects";


export class BillDomain implements IBillEntity{
    IDBill?: string |  IdbillValue;
    Date?: Date |  DateValue;
    PaymentMethod?:string |  PaymentMethodValue;
    PaymentAmount?: string |  PaymentAmountValue;
    Total?: number |  TotalValue;
    IdClinet?: string |   IdclientValue;
    IdManga?: string |  IdmangaValue;





    constructor (_data?: IBillEntity){

        if(_data.IDBill) this.IDBill = _data.IDBill
        
        else this.IDBill = uuidv4()      

        if (_data?.Date) this.Date = _data.Date;

        if (_data?.PaymentMethod) this.PaymentMethod = _data.PaymentMethod;
    
        if (_data?.PaymentAmount) this.PaymentAmount = _data.PaymentAmount;

        if (_data?.Total) this.Total = _data.Total;

        if (_data?.IdClinet) this.IdClinet = _data.IdClinet;

        else this.IdClinet = uuidv4()      

        if (_data?.IdManga) this.IdManga = _data.IdManga;


        else this.IdManga = uuidv4()      

    }
}
