import { GuestDomainEntity } from "../entities";
import { IUpdateEmail, IUpdatePhone } from "../interfaces";

export interface IGuestDomainService<T extends GuestDomainEntity = GuestDomainEntity> {
    updatePhone(data: IUpdatePhone): Promise<GuestDomainEntity>;
    updateEmail(data: IUpdateEmail): Promise<GuestDomainEntity>;
}