import { InvoiceDomainEntity } from "../entities";
import { IUpdateCost } from "../interfaces";

export interface IInvoiceDomainService {
    updateCost(data: IUpdateCost): Promise<InvoiceDomainEntity>
}