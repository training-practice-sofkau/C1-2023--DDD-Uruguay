import { DateValueObject } from "../../../../value-objects/common";
import { ItemValueObject, WarrantyStatusValueObject } from "../../../../value-objects/warranty";


export interface IAddWarrantyCommand {

    startDate?:  number | Date | DateValueObject;
    endDate?:  number | Date | DateValueObject;
    itemsCovered?: ItemValueObject[];
    warrantyStatus: WarrantyStatusValueObject;    

}