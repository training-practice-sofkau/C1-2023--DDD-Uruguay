import { DateValueObject } from "../../../value-objects/common";
import { ItemValueObject, WarrantyStatusValueObject } from "../../../value-objects/warranty";


export interface IAddWarrantyCommand {

    startDate?:  Date;
    endDate?:  Date;
    itemsCovered?: string[];
    warrantyStatus?: string;    

}