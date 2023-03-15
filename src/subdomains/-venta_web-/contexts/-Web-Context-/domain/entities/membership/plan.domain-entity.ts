import { CostoValueObject } from "../../value-objects/common-value-objects/costo/costo.value-object";
import { DateValueObject } from "../../value-objects/common-value-objects/date/date.value-object";
import { FullnameValueObject } from "../../value-objects/common-value-objects/fullname/fullname.value-object";
import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { IPlanDomainEntityInterface } from "../interfaces/i-plan.domain-entity.interface";
import { v4 as uuidv4 } from 'uuid';

export class PlanDomainEntity implements IPlanDomainEntityInterface{

    idPlan: string | UuidValueObject;
    nombrePlan: string | FullnameValueObject;
    dateInicioPlan: number | DateValueObject;
    dateFinPlan: number | DateValueObject;
    costoPlan: number | CostoValueObject;


    constructor( _data? : IPlanDomainEntityInterface ){
        
        if(_data?.idPlan) this.idPlan = _data.idPlan
        
        else this.idPlan = uuidv4();

        if (_data?.nombrePlan) this.nombrePlan = _data.nombrePlan;

        if (_data?.dateInicioPlan) this.dateInicioPlan = _data.dateInicioPlan;

        if (_data?.dateFinPlan) this.dateFinPlan = _data.dateFinPlan;

        if (_data?.costoPlan) this.costoPlan = _data.costoPlan;

    }
}
