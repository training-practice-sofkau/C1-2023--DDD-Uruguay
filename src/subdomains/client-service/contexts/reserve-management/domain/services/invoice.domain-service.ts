import { IUpdateCost } from "../interfaces";

export interface IInvoiceDomainService {
    updateCost(data: IUpdateCost): Promise<number>
}