import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";
import { AmountValueObject } from "../../../value-objects/invoice";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty";

export interface ICreateInvoiceCommand{

    dateEmitted?: Date;
    ticketID?: string;
    customerID?: string;
    invoiceAmount?: number;
    warrantyID?: string;
    isPaid?: boolean;
}