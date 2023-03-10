import { InvoiceDomainEntityBase } from '../../../entities';
import { FeeChargeValueObject } from '../../../value-objects/invoice';

export interface IUpdateFeeChargeCommand {
    domain: InvoiceDomainEntityBase;
    charge: FeeChargeValueObject;
}