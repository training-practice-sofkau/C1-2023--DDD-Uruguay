import { UUIDValueObject, TrueFalseValueObject } from "../../../../value-objects/common";

export interface IChangeWorkStatusCommand{

    repairID: string;
    newStatus: boolean;    
}