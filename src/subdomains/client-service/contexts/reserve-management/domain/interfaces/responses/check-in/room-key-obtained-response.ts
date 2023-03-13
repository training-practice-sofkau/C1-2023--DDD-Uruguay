import { RoomKeyDomainEntity } from "../../../entities";

export class IRoomKeyObtainedResponse {
    succes: boolean;
    data: RoomKeyDomainEntity | null 
}
