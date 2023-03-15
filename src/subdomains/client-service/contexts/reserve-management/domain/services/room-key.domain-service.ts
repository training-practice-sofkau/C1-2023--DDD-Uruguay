import { RoomKeyDomainEntity } from "../entities";
import { IUpdateAccessLevel } from "../interfaces";

export interface IRoomKeyDomainService<T extends RoomKeyDomainEntity = RoomKeyDomainEntity> {
    updateAccessLevel(data: IUpdateAccessLevel): Promise<RoomKeyDomainEntity>
}