import { IsDate, IsUUID } from "class-validator";
import { IUpdateEndDate } from "../../../domain";

export class IUpdateEndDateCommand implements IUpdateEndDate {

    @IsUUID()
    reserveId?: string;

    @IsDate()
    Date?: Date;
}