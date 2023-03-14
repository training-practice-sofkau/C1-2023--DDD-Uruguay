import { IsString, IsUUID } from "class-validator";
import { IUpdateEmail } from "../../../../../domain";

export class IUpdateEmailCommand implements IUpdateEmail {

    @IsUUID()
    guestId: string;

    @IsString()
    email: string;
}