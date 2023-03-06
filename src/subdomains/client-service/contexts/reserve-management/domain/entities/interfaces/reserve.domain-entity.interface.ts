import { DateValueObject, IdValueObject, NumberOfGuestsValueObject } from "../../value-objects";
import { ICustomerDomainEntity, IRoomDomainEntity } from "../interfaces";

export interface ReserveDomainEntity {
    reserveId: string | IdValueObject;
    startDate: Date | DateValueObject;
    endDate?: Date | DateValueObject;
    numberOfGuests: number | NumberOfGuestsValueObject;
    room: IRoomDomainEntity;
    customer: ICustomerDomainEntity;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
