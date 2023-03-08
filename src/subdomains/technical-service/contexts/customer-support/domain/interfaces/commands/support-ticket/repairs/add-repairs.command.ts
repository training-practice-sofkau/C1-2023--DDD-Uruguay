import { UUIDValueObject } from '../../../../value-objects/common';
import { FaultValueObject } from '../../../../value-objects/repair/fault.value-object';

export interface IAddRepairsCommand{

    repairID: string | UUIDValueObject;
    faultToAdd: FaultValueObject;
}