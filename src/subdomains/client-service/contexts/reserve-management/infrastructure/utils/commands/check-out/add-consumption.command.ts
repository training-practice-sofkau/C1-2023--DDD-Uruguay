import { IsNumber, IsUUID } from "class-validator";
import { IAddConsumption } from "../../../../domain";

export class IAddConsumptionCommand implements IAddConsumption {

    @IsUUID()
    consumptionId: string;

    @IsNumber()
    miniBar: number;

    @IsNumber()
    consumptionFood: number;

    @IsNumber()
    laundry: number;

    @IsNumber()
    extra: number;
}