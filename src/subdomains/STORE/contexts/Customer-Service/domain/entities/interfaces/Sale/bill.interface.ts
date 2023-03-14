import { IdmangaValue } from "../../../value-objects";
import { DateValue } from "../../../value-objects/Sale/Bill/date-value/date-value";
import { IdbillValue } from "../../../value-objects/Sale/Bill/idbill-value/idbill-value";
import { IdclientValue } from "../../../value-objects/Sale/Bill/idclient-value/idclient-value";
import { PaymentAmountValue } from "../../../value-objects/Sale/Bill/payment-amount-value/payment-amount-value";
import { PaymentMethodValue } from "../../../value-objects/Sale/Bill/payment-method-value/payment-method-value";
import { TotalValue } from "../../../value-objects/Sale/Bill/total-value/total-value";

export interface IBillEntity {

IDBill?: string |   IdbillValue
PaymentMethod?: string |  PaymentMethodValue
PaymentAmount?: string |  PaymentAmountValue
Total?: number | TotalValue
IdClinet?: string | IdclientValue
IdManga?:string |   IdmangaValue


}



