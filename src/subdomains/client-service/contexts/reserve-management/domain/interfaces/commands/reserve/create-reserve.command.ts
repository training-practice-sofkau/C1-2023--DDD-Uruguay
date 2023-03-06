import { IRoomDomainEntity, ICustomerDomainEntity } from "../../../entities";

export interface ICreateReserve {
    reserveId: string;
    startDate: Date;
    endDate?: Date;
    numberOfGuests: number;
    room: IRoomDomainEntity;
    customer: ICustomerDomainEntity;
    createdAt?: number | Date;
}