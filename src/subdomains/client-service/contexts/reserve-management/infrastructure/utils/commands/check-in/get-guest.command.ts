import { IsUUID } from "class-validator";
import { IGetGuest } from "../../../../domain";

export class IGetGuestCommand implements IGetGuest{

    @IsUUID()
    guestId: string
}