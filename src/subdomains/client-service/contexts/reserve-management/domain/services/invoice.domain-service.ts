import { InvoiceDomainEntity } from "../entities";
import { IUpdateCost } from "../interfaces";

export interface IInvoiceDomainService<T extends InvoiceDomainEntity = InvoiceDomainEntity> {
    updateCost(data: IUpdateCost): Promise<InvoiceDomainEntity>
}