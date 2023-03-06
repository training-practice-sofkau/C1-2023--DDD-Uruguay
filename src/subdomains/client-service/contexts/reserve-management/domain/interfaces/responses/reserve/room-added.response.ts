import { RoomDomainEntity } from "../../../entities";

export interface IRoomAddedResponse {
    success: boolean;
    data: RoomDomainEntity| null;
}