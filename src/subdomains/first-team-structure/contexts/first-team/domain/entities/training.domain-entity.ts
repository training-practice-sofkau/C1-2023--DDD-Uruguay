import { IdValueObject, DurationValueObject, NameValueObject } from "../value-objects";
import { ITrainingDomainEntity } from "./interfaces";
import { TeamDomainEntity } from "./team.domain-entity";
import { TrainerDomainEntity } from "./training/trainer.domain-entity";
import { TrainingEquipmentDomainEntity } from "./training/training-equipment.domain-entity";
import { TrainingFieldDomainEntity } from "./training/training-field.domain-entity";
import { WorkoutDomainEntity } from "./training/workout.domain-entity";

/**
 *Training Aggregate Entity
 *
 * @export
 * @class TrainingDomainEntity
 * @implements {ITrainingDomainEntity}
 */
export class TrainingDomainEntity implements ITrainingDomainEntity{
    trainingId: string | IdValueObject;
    duration: number | DurationValueObject;
    team: TeamDomainEntity;
    trainingEquipments: TrainingEquipmentDomainEntity[];
    trainingField: TrainingFieldDomainEntity;
    name: string | NameValueObject;
    trainer: TrainerDomainEntity;
    workouts: WorkoutDomainEntity[];
}
