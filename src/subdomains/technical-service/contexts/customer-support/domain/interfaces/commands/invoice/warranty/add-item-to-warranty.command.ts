import { UUIDValueObject } from "../../../../value-objects/common";
import { ItemValueObject } from '../../../../value-objects/warranty/item.value-object';

export interface IAddItemToWarrantyCommand{

    warrantyID: string | UUIDValueObject;
    itemToAdd: ItemValueObject;    
}