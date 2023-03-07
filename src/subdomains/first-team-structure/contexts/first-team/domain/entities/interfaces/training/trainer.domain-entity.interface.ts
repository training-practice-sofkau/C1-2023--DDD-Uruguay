import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, SpecialtyValueObject } from "../../../value-objects";

/**
 *Trainer Interface Entity of Training AR
 *
 * @export
 * @interface ITrainerDomainEntity
 */
export interface ITrainerDomainEntity {
    trainerId: string | IdValueObject,
    fullName: string | FullNameValueObject,
    age: number | AgeValueObject,
    country: string | CountryValueObject,
    specialty: string | SpecialtyValueObject
}
