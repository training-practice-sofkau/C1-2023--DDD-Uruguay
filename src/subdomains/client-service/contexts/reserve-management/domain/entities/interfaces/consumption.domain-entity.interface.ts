import { 
    ConsumptionFoodValueObject, 
    ExtraValueObject, 
    IdValueObject, 
    LaundryValueObject, 
    MiniBarValueObject 
} from "../../value-objects";

export interface IConsumptionDomainEntity {
    consumptionId: string | IdValueObject;
    miniBar: number | MiniBarValueObject;
    consumptionFood: number | ConsumptionFoodValueObject;
    laundry: number | LaundryValueObject;
    extra: number | ExtraValueObject;
}
