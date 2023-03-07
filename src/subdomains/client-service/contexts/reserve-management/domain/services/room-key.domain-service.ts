import { IUpdateAccessLevel } from "../interfaces";

export interface IRoomKeyDomainService {
    updateAccessLevel(data: IUpdateAccessLevel): Promise<string>
}