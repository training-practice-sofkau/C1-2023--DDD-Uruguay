import { RoomDomainEntity } from "../../../entities";

export interface IRoomKeyAddedResponse {
    success: boolean;
    data: RoomDomainEntity | null;
}