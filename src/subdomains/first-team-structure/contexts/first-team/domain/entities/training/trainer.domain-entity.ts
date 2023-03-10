import { IdValueObject, FullNameValueObject, AgeValueObject, CountryValueObject, SpecialtyValueObject } from "../../value-objects";
import { ITrainerDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Trainer Entity of Training AR
 *
 * @export
 * @class TrainerDomainEntity
 * @implements {ITrainerDomainEntity}
 */
export class TrainerDomainEntity implements ITrainerDomainEntity{
    trainerId?: string | IdValueObject;
    fullName: string | FullNameValueObject;
    age: number | AgeValueObject;
    country: string | CountryValueObject;
    specialty: string | SpecialtyValueObject;

    constructor(data: ITrainerDomainEntity) {
        if(data.trainerId) this.trainerId = data.trainerId
        else this.trainerId = uuidv4();

        if(data.fullName) this.fullName = data.fullName
        
        if(data.age) this.age = data.age

        if(data.country) this.country = data.country

        if(data.specialty) this.specialty = data.specialty
    }
}
