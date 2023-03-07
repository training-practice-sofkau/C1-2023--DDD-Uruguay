import { v4 as uuidv4 } from 'uuid';
import { 
    IdValueObject, 
    DateValueObject, 
    FullNameValueObject 
} from "../../value-objects";
import { 
    ICheckOutDomainEntity, 
    IConsumptionDomainEntity, 
    IInvoiceDomainEntity 
} from "../interfaces";

export class CheckOutDomainEntity implements ICheckOutDomainEntity{

    checkOutId: string | IdValueObject;
    endDate: Date | DateValueObject;
    recepsionistName: string | FullNameValueObject;
    invoice: IInvoiceDomainEntity;
    consumption: IConsumptionDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor(_data?: ICheckOutDomainEntity) {
        if(_data.checkOutId) this.checkOutId = _data.checkOutId;
        else this.checkOutId = uuidv4();

        if(_data?.recepsionistName) this.recepsionistName = _data.recepsionistName;

        if(_data?.endDate) this.endDate = _data.endDate;

        if(_data?.invoice) this.invoice = _data.invoice;

        if(_data?.consumption) this.consumption = _data.consumption;

        this.createdAt = new Date();
    }
}
