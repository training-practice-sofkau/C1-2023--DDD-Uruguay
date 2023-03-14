import { IdValueObject, DurationValueObject, NameValueObject } from "../value-objects";
import { ITrainingDomainEntity } from "./interfaces";
import { TeamDomainEntity } from "./team.domain-entity";
import { TrainerDomainEntity } from "./training/trainer.domain-entity";
import { TrainingEquipmentDomainEntity } from "./training/training-equipment.domain-entity";
import { TrainingFieldDomainEntity } from "./training/training-field.domain-entity";
import { WorkoutDomainEntity } from "./training/workout.domain-entity";
import { v4 as uuidv4 } from 'uuid';

/**
 *Training Aggregate Entity
 *
 * @export
 * @class TrainingDomainEntity
 * @implements {ITrainingDomainEntity}
 */
export class TrainingDomainEntity implements ITrainingDomainEntity{
    trainingId?: string | IdValueObject;
    duration: number | DurationValueObject;
    team: TeamDomainEntity;
    trainingField: TrainingFieldDomainEntity;
    name: string | NameValueObject;
    trainer: TrainerDomainEntity;

    constructor(data: ITrainingDomainEntity) {
        if(data.trainingId) this.trainingId = data.trainingId
        else this.trainingId = uuidv4();

        if(data.duration) this.duration = data.duration

        if(data.team) this.team = data.team

        if(data.trainingField) this.trainingField = data.trainingField

        if(data.name) this.name = data.name

        if(data.trainer) this.trainer = data.trainer
    }
}
