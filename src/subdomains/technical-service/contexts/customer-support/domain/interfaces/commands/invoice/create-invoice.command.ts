import { DateValueObject, TrueFalseValueObject, UUIDValueObject } from "../../../value-objects/common";
import { AmountValueObject } from "../../../value-objects/invoice";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty";

export interface ICreateInvoiceCommand{

    dateEmitted: number | Date;
    ticketID: string;
    customerID?: string;
    invoiceAmount?: number;
    warranties?: string[];
    isPaid?: boolean;
}