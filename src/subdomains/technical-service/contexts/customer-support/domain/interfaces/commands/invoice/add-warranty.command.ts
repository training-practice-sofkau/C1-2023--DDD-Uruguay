import { DateValueObject } from "../../../value-objects/common";
import { ItemValueObject, WarrantyStatusValueObject } from "../../../value-objects/warranty";


export interface IAddWarrantyCommand {

    startDate?:  number | Date;
    endDate?:  number | Date ;
    itemsCovered?: string[];
    warrantyStatus: string;    

}