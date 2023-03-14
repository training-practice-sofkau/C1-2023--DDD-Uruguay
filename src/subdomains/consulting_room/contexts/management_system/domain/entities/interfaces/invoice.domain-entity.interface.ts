import { AmountObjectValue, DateTimeValueObject, InvoiceIdObjectValue } from "../../value-objects";

export interface IInvoiceDomainEntity {
    invoiceId?: string | InvoiceIdObjectValue;
    amount?: number | AmountObjectValue;
    date?: number | DateTimeValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}