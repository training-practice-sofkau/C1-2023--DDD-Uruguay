import {
    AccommodationValueObject,
    IdValueObject,
    LocationValueObject,
    RoomNumberValueObject,
    StateValueObject,
    TypeValueObject
} from "../../value-objects";

export interface IRoomDomainEntity {
    roomId: string | IdValueObject;
    location: string | LocationValueObject;
    accommodation: string | AccommodationValueObject;
    type: string | TypeValueObject;
    state: boolean | StateValueObject;
    roomNumber: number | RoomNumberValueObject;
    createdAt?: number | Date;
    updatedAt?: number | Date;
    deletedAt?: number | Date;
}
