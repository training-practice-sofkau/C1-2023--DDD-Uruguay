import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, SpecialtyValueObject } from "../../../value-objects";

export interface IAddTrainerCommand {
    trainerId: string | IdValueObject,
    fullName: string | FullNameValueObject,
    age: number | AgeValueObject,
    country: string | CountryValueObject,
    specialty: string | SpecialtyValueObject
}