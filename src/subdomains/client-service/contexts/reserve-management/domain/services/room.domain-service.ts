import { RoomDomainEntity } from "../entities";
import { IUpdateState } from "../interfaces";

export interface IRoomDomainService{
    updateState(data: IUpdateState): Promise<RoomDomainEntity>
}