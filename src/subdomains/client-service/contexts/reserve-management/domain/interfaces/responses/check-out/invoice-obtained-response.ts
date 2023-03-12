import { InvoiceDomainEntity } from "../../../entities";

export class IInvoiceObtainedResponse {
    succes: boolean;
    data: InvoiceDomainEntity | null 
}
