import { IInvoiceDomainEntity, IConsumptionDomainEntity } from "../../../entities";

export interface ICreateCheckOut {
    checkOutId: string;
    endDate: Date;
    recepsionistName: string;
    invoice: IInvoiceDomainEntity;
    consumption: IConsumptionDomainEntity;
}