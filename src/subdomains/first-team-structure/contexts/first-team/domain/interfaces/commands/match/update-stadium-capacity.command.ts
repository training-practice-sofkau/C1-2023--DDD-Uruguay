import { CapacityValueObject } from "../../../value-objects";

export interface IUpdateStadiumCapacity {
    stadiumId: string,
    capacity: number | CapacityValueObject
}