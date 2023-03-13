import { InvoiceDomainEntityBase } from '../../../entities';
import { FeeTaxValueObject } from '../../../value-objects/invoice';

export interface IUpdateFeeTaxCommand {
    invoiceId: string;
    tax: FeeTaxValueObject;
}