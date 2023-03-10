import { IdValueObject, AgeValueObject, WageValueObject, FullNameValueObject, CountryValueObject } from "../../value-objects";
import { ICoachDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Coach Entity of Team AR
 *
 * @export
 * @class CoachDomainEntity
 * @implements {ICoachDomainEntity}
 */
export class CoachDomainEntity implements ICoachDomainEntity{
    coachId?: string | IdValueObject;
    age: number | AgeValueObject;
    wage: number | WageValueObject;
    fullName: string | FullNameValueObject;
    country: string | CountryValueObject;

    constructor(data: ICoachDomainEntity) {
        if(data.coachId) this.coachId = data.coachId
        else this.coachId = uuidv4();

        if(data.age) this.age = data.age

        if(data.wage) this.wage = data.wage

        if(data.fullName) this.fullName = data.fullName

        if(data.country) this.country = data.country
    }
}
