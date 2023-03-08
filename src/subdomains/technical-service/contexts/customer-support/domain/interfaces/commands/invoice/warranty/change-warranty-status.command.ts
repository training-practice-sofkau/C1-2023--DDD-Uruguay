import { UUIDValueObject, NoteValueObject } from "../../../../value-objects/common";
import { WarrantyStatusValueObject } from '../../../../value-objects/warranty/warranty-status.value-object';

export interface IChangeWarrantyStatusCommand{

    warrantyID: string;
    warrantyStatus: string;
    reason: string;    
}