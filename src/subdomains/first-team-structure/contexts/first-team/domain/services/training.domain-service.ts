import { ITrainerDomainEntity, ITrainingDomainEntity, ITrainingEquipmentDomainEntity, ITrainingFieldDomainEntity, IWorkoutDomainEntity, TrainingEquipmentDomainEntity, TrainingFieldDomainEntity, WorkoutDomainEntity } from '../entities';
import { TrainerDomainEntity } from '../entities/training/trainer.domain-entity';
import { TrainingDomainEntity } from '../entities/training.domain-entity';
import { TeamDomainEntity } from '../entities/team.domain-entity';
import { IUpdateDurationCommand, IUpdateNameCommand } from '../interfaces';

export interface ITrainingDomainService {
    registerTraining(training: ITrainingDomainEntity): Promise<TrainingDomainEntity | null>;
    addTrainingEquipment(trainingEquipment: ITrainingEquipmentDomainEntity): Promise<TrainingEquipmentDomainEntity | null>;
    addTrainingField(trainingField: ITrainingFieldDomainEntity): Promise<TrainingFieldDomainEntity | null>;
    addTrainer(trainer: ITrainerDomainEntity): Promise<TrainerDomainEntity | null>;
    addWorkout(workout: IWorkoutDomainEntity): Promise<WorkoutDomainEntity | null>;
    updateDuration(date: IUpdateDurationCommand): Promise<TrainingDomainEntity | null>;
    // updateTrainingEquipmentType(type: IUpdateTrainingEquipmentTypeCommand): Promise<TrainingEquipmentDomainEntity | null>;
    // updateTrainingFieldName(name: IUpdateTrainingFieldNameCommand): Promise<TrainingFieldDomainEntity | null>;
    // updateTrainerSpecialty(specialty: IUpdateTrainerSpecialtyCommand): Promise<TrainerDomainEntity | null>;
    // updateWorkoutGoal(goal: IUpdateWorkoutGoalCommand): Promise<WorkoutDomainEntity | null>;
    updateName(name: IUpdateNameCommand): Promise<TrainingDomainEntity | null>
    getTraining(id: string): Promise<TrainingDomainEntity | null>;
    getTeam(id: string): Promise<TeamDomainEntity | null>;
    // getTrainerId(id: string): Promise<IdValueObject | null>;
    // getTrainingEquipmentsId(id: string): Promise<IdValueObject[] | null>;
    // getTrainingFieldId(id: string): Promise<IdValueObject | null>;
    // getWorkoutsId(id: string): Promise<IdValueObject[] | null>;
}