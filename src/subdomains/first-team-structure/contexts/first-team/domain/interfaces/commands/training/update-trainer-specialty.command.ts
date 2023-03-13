import { SpecialtyValueObject } from "../../../value-objects";

export interface IUpdateTrainerSpecialtyCommand {
    trainerId: string,
    specialty: string | SpecialtyValueObject
}