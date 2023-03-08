import { IdValueObject, NameValueObject, TownValueObject } from "../../value-objects";
import { ITrainingFieldDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Training Field Entity of Training AR
 *
 * @export
 * @class TrainingFieldDomainEntity
 * @implements {ITrainingFieldDomainEntity}
 */
export class TrainingFieldDomainEntity implements ITrainingFieldDomainEntity{
    trainingFieldId: string | IdValueObject;
    name: string | NameValueObject;
    town: string | TownValueObject;

    constructor(data: ITrainingFieldDomainEntity) {
        if(data.trainingFieldId) this.trainingFieldId = data.trainingFieldId
        else this.trainingFieldId = uuidv4();

        if(data.name) this.name = data.name

        if(data.town) this.town = data.town
    }
}
