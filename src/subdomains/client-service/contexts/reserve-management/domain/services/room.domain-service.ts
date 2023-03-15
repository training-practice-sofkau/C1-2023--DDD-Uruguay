import { RoomDomainEntity } from "../entities";
import { IUpdateState } from "../interfaces";

export interface IRoomDomainService<T extends RoomDomainEntity = RoomDomainEntity>{
    updateState(data: IUpdateState): Promise<RoomDomainEntity>
}