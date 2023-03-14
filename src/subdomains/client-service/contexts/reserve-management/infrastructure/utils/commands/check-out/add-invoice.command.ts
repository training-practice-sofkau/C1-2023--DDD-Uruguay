import { IsDate, IsNumber, IsUUID } from "class-validator";
import { IAddInvoice } from "../../../../domain";

export class IAddInvoiceCommand implements IAddInvoice {

    @IsUUID()
    invoiceId: string;

    @IsDate()
    date: Date;

    @IsNumber()
    cost: number;
}