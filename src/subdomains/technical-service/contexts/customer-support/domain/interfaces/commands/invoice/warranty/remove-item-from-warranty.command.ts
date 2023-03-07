import { UUIDValueObject } from "../../../../value-objects/common";
import { ItemValueObject } from '../../../../value-objects/warranty/item.value-object';

export interface IRemoveItemFromWarrantyCommand{

    warrantyID: string | UUIDValueObject;
    itemToRemove: ItemValueObject;    
}