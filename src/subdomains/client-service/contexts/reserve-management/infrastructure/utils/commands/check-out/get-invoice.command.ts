import { IsUUID } from "class-validator";
import { IGetInvoice } from "../../../../domain";

export class IGetInvoiceCommand implements IGetInvoice{

    @IsUUID()
    invoiceId: string
}