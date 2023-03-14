import { IsNumber, IsUUID } from "class-validator";
import { IUpdateCost } from "../../../../../domain";

export class IUpdateCostCommand implements IUpdateCost {

    @IsUUID()
    invoiceId: string;

    @IsNumber()
    cost: number;
}