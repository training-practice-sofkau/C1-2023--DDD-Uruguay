import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";
import { AmountValueObject } from "../../../value-objects/invoice";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty";

export interface ICreateInvoiceCommand{

    dateEmitted: number | Date | DateValueObject;
    ticketID: string | UUIDValueObject;
    customerID?: string | UUIDValueObject;
    invoiceAmount?: number | AmountValueObject;
    warranties?: WarrantyStatusValueObject[];
    isPaid?: boolean | TrueFalseValueObject;
}