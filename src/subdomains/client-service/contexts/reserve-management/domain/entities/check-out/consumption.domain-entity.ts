import { v4 as uuidv4 } from 'uuid';
import { 
    IdValueObject, 
    MiniBarValueObject, 
    ConsumptionFoodValueObject, 
    LaundryValueObject, 
    ExtraValueObject 
} from "../../value-objects";
import { IConsumptionDomainEntity } from "../interfaces";

export class ConsumptionDomainEntity implements IConsumptionDomainEntity{

    consumptionId: string | IdValueObject;
    miniBar: number | MiniBarValueObject;
    consumptionFood: number | ConsumptionFoodValueObject;
    laundry: number | LaundryValueObject;
    extra: number | ExtraValueObject;

    constructor(_data?: IConsumptionDomainEntity) {
        if(_data.consumptionId) this.consumptionId = _data.consumptionId;
        else this.consumptionId = uuidv4();

        if(_data?.miniBar) this.miniBar = _data.miniBar;

        if(_data?.consumptionFood) this.consumptionFood = _data.consumptionFood;

        if(_data?.laundry) this.laundry = _data.laundry;

        if(_data?.extra) this.extra = _data.extra;
    }
}
