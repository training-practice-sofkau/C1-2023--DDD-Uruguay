import { IsString, IsUUID } from "class-validator";
import { IUpdatePhone } from "../../../../../domain";

export class IUpdatePhoneCommand implements IUpdatePhone {

    @IsUUID()
    guestId: string;

    @IsString()
    phone: string;
}