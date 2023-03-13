import { RoomKeyDomainEntity } from "../entities";
import { IUpdateAccessLevel } from "../interfaces";

export interface IRoomKeyDomainService {
    updateAccessLevel(data: IUpdateAccessLevel): Promise<RoomKeyDomainEntity>
}