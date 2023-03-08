import { InvoiceDomainEntity } from "../../../entities";

export interface IInvoiceAddedResponse {
    success: boolean;
    data: InvoiceDomainEntity | null;
}