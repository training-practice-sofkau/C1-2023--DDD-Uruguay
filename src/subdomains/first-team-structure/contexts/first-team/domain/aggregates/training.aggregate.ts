import {
  ITrainerDomainEntity,
  ITrainingDomainEntity,
  ITrainingEquipmentDomainEntity,
  ITrainingFieldDomainEntity,
  IWorkoutDomainEntity,
  TeamDomainEntity,
  TrainerDomainEntity,
  TrainingDomainEntity,
  TrainingEquipmentDomainEntity,
  TrainingFieldDomainEntity,
  WorkoutDomainEntity,
} from '../entities';
import {
  ITrainerDomainService,
  ITrainingDomainService,
  ITrainingEquipmentDomainService,
  ITrainingFieldDomainService,
  IWorkoutDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { IUpdateDurationCommand, IUpdateNameCommand, IUpdateTrainerSpecialtyCommand, IUpdateTrainingEquipmentTypeCommand, IUpdateTrainingFieldNameCommand, IUpdateWorkoutGoalCommand } from '../interfaces';
import { TrainingAggregateHelper } from './interfaces/training-helper';

export class TrainingAggregate implements ITrainingDomainService, ITrainerDomainService, ITrainingEquipmentDomainService, ITrainingFieldDomainService, IWorkoutDomainService {
  constructor(
    private readonly trainingAggregateHelper: TrainingAggregateHelper
  ) {}
  async getWorkouts(id: string[]): Promise<WorkoutDomainEntity[]> {
    if (!this.trainingAggregateHelper.workoutService)
      throw new AggregateRootException('Workout service undefined');

      const result = await this.trainingAggregateHelper.workoutService.getWorkouts(id);
      return result;
  }
  async getTeam(id: string): Promise<TeamDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');

      const result = await this.trainingAggregateHelper.trainingService.getTeam(id);
      return result;
  }
  async getTrainingField(id: string): Promise<TrainingFieldDomainEntity> {
    if (!this.trainingAggregateHelper.trainingFieldService)
      throw new AggregateRootException('Training Field service undefined');

      const result = await this.trainingAggregateHelper.trainingFieldService.getTrainingField(id);
      return result;
  }
  async getTrainingEquipment(id: string[]): Promise<TrainingEquipmentDomainEntity[]> {
    if (!this.trainingAggregateHelper.trainingEquipmentService)
      throw new AggregateRootException('Training Equipment service undefined');

      const result = await this.trainingAggregateHelper.trainingEquipmentService.getTrainingEquipment(id);
      return result;
  }
  async getTrainer(id: string): Promise<TrainerDomainEntity> {
    if (!this.trainingAggregateHelper.trainerService)
      throw new AggregateRootException('Trainer service undefined');

      const result = await this.trainingAggregateHelper.trainerService.getTrainer(id);
      return result;
  }
  async getTraining(id: string): Promise<TrainingDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');

      const result = await this.trainingAggregateHelper.trainingService.getTraining(id);
      return result;
  }
  async registerTraining(
    training: ITrainingDomainEntity,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.registeredTrainingEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.registerTraining(training);
    this.trainingAggregateHelper.registeredTrainingEventPublisher.response = result;
    this.trainingAggregateHelper.registeredTrainingEventPublisher.publish();
    return result;
  }
  async addTrainingEquipment(
    trainingEquipment: ITrainingEquipmentDomainEntity,
  ): Promise<TrainingEquipmentDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.addedTrainingEquipmentEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.addTrainingEquipment(
      trainingEquipment,
    );
    this.trainingAggregateHelper.addedTrainingEquipmentEventPublisher.response = result;
    this.trainingAggregateHelper.addedTrainingEquipmentEventPublisher.publish();
    return result;
  }
  async addTrainingField(
    trainingField: ITrainingFieldDomainEntity,
  ): Promise<TrainingFieldDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.addedTrainingFieldEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.addTrainingField(trainingField);
    this.trainingAggregateHelper.addedTrainingFieldEventPublisher.response = result;
    this.trainingAggregateHelper.addedTrainingFieldEventPublisher.publish();
    return result;
  }
  async addTrainer(trainer: ITrainerDomainEntity): Promise<TrainerDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.addedTrainerEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.addTrainer(trainer);
    this.trainingAggregateHelper.addedTrainerEventPublisher.response = result;
    this.trainingAggregateHelper.addedTrainerEventPublisher.publish();
    return result;
  }
  async addWorkout(workout: IWorkoutDomainEntity): Promise<WorkoutDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.addedWorkoutEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.addWorkout(workout);
    this.trainingAggregateHelper.addedWorkoutEventPublisher.response = result;
    this.trainingAggregateHelper.addedWorkoutEventPublisher.publish();
    return result;
  }
  async updateDuration(
    date: IUpdateDurationCommand,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.updatedDurationEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.updateDuration(date);
    this.trainingAggregateHelper.updatedDurationEventPublisher.response = result;
    this.trainingAggregateHelper.updatedDurationEventPublisher.publish();
    return result;
  }
  async updateTrainingEquipmentType(
    type: IUpdateTrainingEquipmentTypeCommand,
  ): Promise<TrainingEquipmentDomainEntity> {
    if (!this.trainingAggregateHelper.trainingEquipmentService)
      throw new AggregateRootException('Training Equipment service undefined');
    if (!this.trainingAggregateHelper.updatedTrainingEquipmentTypeEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingEquipmentService.updateTrainingEquipmentType(
      type,
    );
    this.trainingAggregateHelper.updatedTrainingEquipmentTypeEventPublisher.response = result;
    this.trainingAggregateHelper.updatedTrainingEquipmentTypeEventPublisher.publish();
    return result;
  }
  async updateTrainingFieldName(
    name: IUpdateTrainingFieldNameCommand,
  ): Promise<TrainingFieldDomainEntity> {
    if (!this.trainingAggregateHelper.trainingFieldService)
      throw new AggregateRootException('Training Field service undefined');
    if (!this.trainingAggregateHelper.updatedTrainingFieldNameEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingFieldService.updateTrainingFieldName(name);
    this.trainingAggregateHelper.updatedTrainingFieldNameEventPublisher.response = result;
    this.trainingAggregateHelper.updatedTrainingFieldNameEventPublisher.publish();
    return result;
  }
  async updateTrainerSpecialty(
    specialty: IUpdateTrainerSpecialtyCommand,
  ): Promise<TrainerDomainEntity> {
    if (!this.trainingAggregateHelper.trainerService)
      throw new AggregateRootException('Trainer service undefined');
    if (!this.trainingAggregateHelper.updatedTrainerSpecialtyEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainerService.updateTrainerSpecialty(
      specialty,
    );
    this.trainingAggregateHelper.updatedTrainerSpecialtyEventPublisher.response = result;
    this.trainingAggregateHelper.updatedTrainerSpecialtyEventPublisher.publish();
    return result;
  }
  async updateWorkoutGoal(
    goal: IUpdateWorkoutGoalCommand,
  ): Promise<WorkoutDomainEntity> {
    if (!this.trainingAggregateHelper.workoutService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.updatedWorkoutGoalEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.workoutService.updateWorkoutGoal(goal);
    this.trainingAggregateHelper.updatedWorkoutGoalEventPublisher.response = result;
    this.trainingAggregateHelper.updatedWorkoutGoalEventPublisher.publish();
    return result;
  }
  async updateName(
    name: IUpdateNameCommand,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingAggregateHelper.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.trainingAggregateHelper.updatedNameEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingAggregateHelper.trainingService.updateName(name);
    this.trainingAggregateHelper.updatedNameEventPublisher.response = result;
    this.trainingAggregateHelper.updatedNameEventPublisher.publish();
    return result;
  }
}
