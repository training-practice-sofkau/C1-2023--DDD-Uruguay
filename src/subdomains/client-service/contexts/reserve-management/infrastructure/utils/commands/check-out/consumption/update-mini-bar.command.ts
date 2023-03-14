import { IsNumber, IsUUID } from "class-validator";
import { IUpdateMiniBar } from "../../../../../domain";


export class IUpdateMiniBarCommand implements IUpdateMiniBar {

    @IsUUID()
    consumptionId: string;

    @IsNumber()
    miniBar: number;
}