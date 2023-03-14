import { IsDate, IsUUID } from "class-validator";
import { IUpdateStartDate } from "../../../domain";

export class IUpdateStartDateCommand implements IUpdateStartDate {

    @IsUUID()
    reserveId?: string;

    @IsDate()
    Date?: Date;
}