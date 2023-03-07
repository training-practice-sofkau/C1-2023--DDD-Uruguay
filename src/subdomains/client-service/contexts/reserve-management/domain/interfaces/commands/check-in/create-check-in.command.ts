import { IRoomKeyDomainEntity, IGuestDomainEntity } from "../../../entities";

export interface ICreateCheckIn {
    checkInId: string;
    reserveId: string;
    startDate: Date;
    recepsionistName: string;
    roomKey: IRoomKeyDomainEntity;
    guest: IGuestDomainEntity;

}