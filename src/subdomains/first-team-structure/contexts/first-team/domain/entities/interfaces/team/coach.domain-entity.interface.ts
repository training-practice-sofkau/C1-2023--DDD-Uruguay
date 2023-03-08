import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, WageValueObject } from "../../../value-objects";

/**
 *Coach Interface Entity of Team AR
 *
 * @export
 * @interface ICoachDomainEntity
 */
export interface ICoachDomainEntity {
    coachId: string | IdValueObject,
    age: number | AgeValueObject,
    wage: number | WageValueObject,
    fullName: string | FullNameValueObject,
    country: string | CountryValueObject
}
