import { IUpdateState } from "../interfaces";

export interface IRoomDomainService{
    updateState(data: IUpdateState): Promise<boolean>
}