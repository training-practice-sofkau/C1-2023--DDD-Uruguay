import { IUpdateNumberOfGuests } from "../../../domain";
import { IsNumber, IsUUID } from "class-validator";

export class IUpdateNumberOfGuestsCommand implements IUpdateNumberOfGuests {

    @IsUUID()
    reserveId?: string;

    @IsNumber()
    numberOfGuests?: number;
}