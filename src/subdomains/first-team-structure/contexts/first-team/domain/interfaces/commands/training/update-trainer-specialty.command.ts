import { IdValueObject, SpecialtyValueObject } from "../../../value-objects";

export interface IUpdateTrainerSpecialtyCommand {
    trainerId: string | IdValueObject
    specialty: string | SpecialtyValueObject
}