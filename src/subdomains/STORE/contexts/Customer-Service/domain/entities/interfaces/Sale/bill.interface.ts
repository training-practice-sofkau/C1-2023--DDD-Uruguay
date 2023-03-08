import { DateValue } from "../../../value-objects/Sale/Bill/date-value/date-value";
import { IdbillValue } from "../../../value-objects/Sale/Bill/idbill-value/idbill-value";
import { IdclientValue } from "../../../value-objects/Sale/Bill/idclient-value/idclient-value";
import { IdmangaValue } from "../../../value-objects/Sale/Bill/idmanga-value/idmanga-value";
import { PaymentAmountValue } from "../../../value-objects/Sale/Bill/payment-amount-value/payment-amount-value";
import { PaymentMethodValue } from "../../../value-objects/Sale/Bill/payment-method-value/payment-method-value";
import { TotalValue } from "../../../value-objects/Sale/Bill/total-value/total-value";

export interface IBillEntity {

IDBill: IdbillValue,
Date:  DateValue
PaymentMethod: PaymentMethodValue
PaymentAmount: PaymentAmountValue
Total: TotalValue
IdClinet: IdclientValue
IdManga: IdmangaValue


}



