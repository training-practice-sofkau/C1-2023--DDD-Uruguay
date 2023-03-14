import { IsUUID } from "class-validator";
import { IGetConsumption } from "../../../../domain";

export class IGetConsumptionCommand implements IGetConsumption{

    @IsUUID()
    consumptionId: string
}