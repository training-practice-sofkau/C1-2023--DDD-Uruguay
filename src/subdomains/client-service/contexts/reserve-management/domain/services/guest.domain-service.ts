import { GuestDomainEntity } from "../entities";
import { IUpdateEmail, IUpdatePhone } from "../interfaces";

export interface IGuestDomainService {
    updatePhone(data: IUpdatePhone): Promise<GuestDomainEntity>;
    updateEmail(data: IUpdateEmail): Promise<GuestDomainEntity>;
}