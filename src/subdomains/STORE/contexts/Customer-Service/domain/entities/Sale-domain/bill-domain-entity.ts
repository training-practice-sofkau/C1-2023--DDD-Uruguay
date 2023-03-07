import { DateValue } from "../../value-objects/Sale/Bill/date-value/date-value";
import { IdbillValue } from "../../value-objects/Sale/Bill/idbill-value/idbill-value";
import { IdclientValue } from "../../value-objects/Sale/Bill/idclient-value/idclient-value";
import { IdmangaValue } from "../../value-objects/Sale/Bill/idmanga-value/idmanga-value";
import { PaymentAmountValue } from "../../value-objects/Sale/Bill/payment-amount-value/payment-amount-value";
import { PaymentMethodValue } from "../../value-objects/Sale/Bill/payment-method-value/payment-method-value";
import { TotalValue } from "../../value-objects/Sale/Bill/total-value/total-value";
import { IBillEntity } from "../interfaces/Sale/bill.interface";

export class BillDomain implements IBillEntity{
    IDBill: IdbillValue;
    Date: DateValue;
    PaymentMethod: PaymentMethodValue;
    PaymentAmount: PaymentAmountValue;
    Total: TotalValue;
    IdClinet: IdclientValue;
    IdManga: IdmangaValue;





    constructor (_data?: IBillEntity){

        if(_data.IDBill) this.IDBill = _data.IDBill
        
        else this.IDBill = uuidv4()      

        if (_data?.Date) this.Date = _data.Date;

        if (_data?.PaymentMethod) this.PaymentMethod = _data.PaymentMethod;
    
        if (_data?.PaymentAmount) this.PaymentAmount = _data.PaymentAmount;

        if (_data?.PaymentMethod) this.PaymentMethod = _data.PaymentMethod;


    }
}
