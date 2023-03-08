import { TrainingEquipmentDomainEntity, TrainingFieldDomainEntity, WorkoutDomainEntity } from '../entities';
import { TrainerDomainEntity } from '../entities/training/trainer.domain-entity';
import { TrainingDomainEntity } from '../entities/training.domain-entity';
import { IAddTrainerCommand, IAddTrainingEquipmentCommand, IAddTrainingFieldCommand, IAddWorkoutCommand, IRegisterTrainingCommand, IUpdateDurationCommand, IUpdateNameCommand, IUpdateTrainerSpecialtyCommand, IUpdateTrainingEquipmentTypeCommand, IUpdateTrainingFieldNameCommand, IUpdateWorkoutGoalCommand } from '../interfaces';

export interface ITrainingDomainService {
    registerTraining(training: IRegisterTrainingCommand): Promise<TrainingDomainEntity | null>;
    addTrainingEquipment(trainingEquipment: IAddTrainingEquipmentCommand): Promise<TrainingEquipmentDomainEntity | null>;
    addTrainingField(trainingField: IAddTrainingFieldCommand): Promise<TrainingFieldDomainEntity | null>;
    addTrainer(trainer: IAddTrainerCommand): Promise<TrainerDomainEntity | null>;
    addWorkout(workout: IAddWorkoutCommand): Promise<WorkoutDomainEntity | null>;
    updateDuration(date: IUpdateDurationCommand): Promise<TrainingDomainEntity | null>;
    updateTrainingEquipmentType(type: IUpdateTrainingEquipmentTypeCommand): Promise<TrainingEquipmentDomainEntity | null>;
    updateTrainingFieldName(name: IUpdateTrainingFieldNameCommand): Promise<TrainingFieldDomainEntity | null>;
    updateTrainerSpecialty(specialty: IUpdateTrainerSpecialtyCommand): Promise<TrainerDomainEntity | null>;
    updateWorkoutGoal(goal: IUpdateWorkoutGoalCommand): Promise<WorkoutDomainEntity | null>;
    updateName(name: IUpdateNameCommand): Promise<TrainingDomainEntity | null>
    // getTrainingId(id: string): Promise<IdValueObject | null>;
    // getTrainerId(id: string): Promise<IdValueObject | null>;
    // getTrainingEquipmentsId(id: string): Promise<IdValueObject[] | null>;
    // getTrainingFieldId(id: string): Promise<IdValueObject | null>;
    // getWorkoutsId(id: string): Promise<IdValueObject[] | null>;
}