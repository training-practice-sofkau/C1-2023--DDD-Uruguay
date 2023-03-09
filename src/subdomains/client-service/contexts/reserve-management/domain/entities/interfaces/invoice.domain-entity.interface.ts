import { 
    CostValueObject, 
    DateValueObject, 
    IdValueObject 
} from "../../value-objects";

export interface IInvoiceDomainEntity {
    invoiceId?: string | IdValueObject;
    date?: Date | DateValueObject;
    cost?: number | CostValueObject;
}
