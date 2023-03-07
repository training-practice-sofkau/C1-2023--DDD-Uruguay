import { v4 as uuid } from "uuid";

import { UUIDValueObject, DateValueObject, } from "../../../value-objects/common";
import { ItemValueObject } from "../../../value-objects/warranty/item.value-object";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";
import { IWarrantyDomainEntity } from '../../interfaces/invoice/warranty.domain-entity.interface';
import { IsUUID } from '../../../../../../../../libs/validations/is-uuid.validation';


export class WarrantyDomainEntityBase implements IWarrantyDomainEntity {
   

    warrantyID: string | UUIDValueObject;
    startDate?: number | Date | DateValueObject;
    endDate?: number | Date | DateValueObject;
    itemsCovered?: ItemValueObject[];
    warrantyStatus: WarrantyStatusValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;

    constructor( _data?: IWarrantyDomainEntity){
        
        if(_data?.warrantyID && IsUUID(_data?.warrantyID)) this.warrantyID = _data.warrantyID;
        else this.warrantyID = uuid();

        if(_data?.startDate) this.startDate = _data.startDate;
        
        if(_data?.endDate) this.endDate = _data.endDate;

        if(_data?.itemsCovered) this.itemsCovered = _data.itemsCovered;

        if(_data?.warrantyStatus) this.warrantyStatus = _data.warrantyStatus;

        this.createdAt = Date.now();
    }    
}