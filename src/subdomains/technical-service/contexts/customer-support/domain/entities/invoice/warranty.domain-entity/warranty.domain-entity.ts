import { v4 as uuid } from "uuid";

import { UUIDValueObject } from "../../../value-objects/common";
import { ItemValueObject } from "../../../value-objects/warranty/item.value-object";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";
import { IWarrantyDomainEntity } from '../../interfaces/invoice/warranty.domain-entity.interface';
import { IsUUID } from '../../../../../../../../libs/validations/is-uuid.validation';


export class WarrantyDomainEntityBase implements IWarrantyDomainEntity {
   

    warrantyID: string | UUIDValueObject;
    startDate?: number | Date;
    endDate?: number | Date;
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




    /* public Warranty(startDate: Date, endDate: Date, itemsCovered: ItemValueObject[], status: WarrantyStatusValueObject){

        this.warrantyID = new UUIDValueObject();
        this.startDate = startDate;
        this.endDate = endDate;
        this.itemsCovered = itemsCovered;
        this.warrantyStatus = status;
    } */


    /**
     * Adds an item to the warranty items list
     *
     * @param {ItemValueObject} item value to add
     * @return {*} item list
     * @memberof Warranty
     */
    public addItemCovered(item: ItemValueObject){

        //TODO: add validaciones si hacen falta ( ? )

        this.itemsCovered.push(item);

        return this.itemsCovered;        
    }

    public removeItemCovered(item: ItemValueObject){

        //TODO: implementar la eliminacion de un item de la lista

        return this.itemsCovered;        
    }



    /**
     * Allows to change the status of the warranty     
     *
     * @param {WarrantyStatusValueObject} newStatus can be finished, canceled or valid
     * @memberof Warranty
     */
    public changeWarrantyStatus(newStatus: WarrantyStatusValueObject){

        //TODO: implementar un nuevo tipo de VO, warrantyStatus, 
        //tiene 2 valores (status: boolean, reason: string)
        //reason: enum con valor => valid, canceled, finalizada

    }
}