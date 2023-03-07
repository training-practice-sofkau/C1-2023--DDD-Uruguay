import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, WageValueObject } from "../../../value-objects";

export interface IAddCoachCommand {
    coachId: string | IdValueObject,
    age: number | AgeValueObject,
    wage: number | WageValueObject,
    fullName: string | FullNameValueObject,
    country: string | CountryValueObject
}