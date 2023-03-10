import { InvoiceDomainEntityBase } from '../../../entities';
import { FeeTaxValueObject } from '../../../value-objects/invoice';

export interface IUpdateFeeTaxCommand {
    domain: InvoiceDomainEntityBase;
    tax: FeeTaxValueObject;
}