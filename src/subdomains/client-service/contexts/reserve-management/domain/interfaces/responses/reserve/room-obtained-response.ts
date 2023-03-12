import { RoomDomainEntity } from "../../../entities";

export class IRoomObtainedResponse {
    succes: boolean;
    data: RoomDomainEntity | null 
}
