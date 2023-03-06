import { UUIDValueObject } from '../../../value-objects/common/uuid/uuid.value-object';
import { ItemValueObject } from '../../../value-objects/warranty/item.value-object';
import { WarrantyStatusValueObject } from '../../../value-objects/warranty/warranty-status.value-object';

export class Warranty {

    private warrantyID: UUIDValueObject;
    private startDate: Date;
    private endDate: Date;
    private itemsCovered: ItemValueObject[];
    private isValid: boolean;

    public Warranty(startDate: Date, endDate: Date, itemsCovered: ItemValueObject[]){

        this.warrantyID = new UUIDValueObject();
        this.startDate = startDate;
        this.endDate = endDate;
        this.itemsCovered = itemsCovered;
        this.isValid = true;
    }


    /**
     * Adds an item to the warranty items list
     *
     * @param {ItemValueObject} item value to add
     * @return {*} item list
     * @memberof Warranty
     */
    public addItemCovered(item: ItemValueObject){

        this.itemsCovered.push(item);

        return this.itemsCovered;        
    }

    public removeItemCovered(item: ItemValueObject){

        //TODO: implementar la eliminacion de un item de la lista

        return this.itemsCovered;        
    }


    public changeWarrantyStatus(newStatus: WarrantyStatusValueObject){

        //TODO: implementar un nuevo tipo de VO, warrantyStatus, 
        //tiene 2 valores (status: boolean, reason: string)
        //reason: enum con valor => valid, canceled, finalizada


    }

}