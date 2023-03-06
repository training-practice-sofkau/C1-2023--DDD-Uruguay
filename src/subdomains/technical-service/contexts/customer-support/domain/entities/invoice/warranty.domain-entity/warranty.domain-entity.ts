import { UUIDValueObject } from "../../../value-objects/common";
import { ItemValueObject } from "../../../value-objects/warranty/item.value-object";
import { WarrantyStatusValueObject } from "../../../value-objects/warranty/warranty-status.value-object";

export class Warranty {

    private warrantyID: UUIDValueObject;
    private startDate: Date;
    private endDate: Date;
    private itemsCovered: ItemValueObject[];
    private warrantyStatus: WarrantyStatusValueObject;

    public Warranty(startDate: Date, endDate: Date, itemsCovered: ItemValueObject[], status: WarrantyStatusValueObject){

        this.warrantyID = new UUIDValueObject();
        this.startDate = startDate;
        this.endDate = endDate;
        this.itemsCovered = itemsCovered;
        this.warrantyStatus = status;
    }


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