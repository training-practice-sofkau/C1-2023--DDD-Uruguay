import { IsNumber, IsUUID } from "class-validator";
import { IUpdateExtra } from "../../../../../domain";

export class IUpdateExtraCommand implements IUpdateExtra {

    @IsUUID()
    consumptionId: string;

    @IsNumber()
    extra: number;
}