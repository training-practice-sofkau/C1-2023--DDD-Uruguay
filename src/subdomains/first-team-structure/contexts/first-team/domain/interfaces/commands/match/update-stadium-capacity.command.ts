import { CapacityValueObject, IdValueObject } from "../../../value-objects";

export interface IUpdateStadiumCapacity {
    stadiumId: string | IdValueObject
    capacity: number | CapacityValueObject
}