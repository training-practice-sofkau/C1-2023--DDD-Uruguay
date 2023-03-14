import { UUIDValueObject } from '../../../../value-objects/common';
import { RepairValueObject } from '../../../../value-objects/repair/repair.value-object';

export interface IAddRepairsCommand{

    repairID: string ;
    repairToAdd: string;
}