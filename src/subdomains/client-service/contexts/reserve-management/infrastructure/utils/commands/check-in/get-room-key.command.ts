import { IsUUID } from "class-validator";
import { IGetRoomKey } from "../../../../domain";

export class IGetRoomKeyCommand implements IGetRoomKey {

    @IsUUID()
    roomKeyId: string
}