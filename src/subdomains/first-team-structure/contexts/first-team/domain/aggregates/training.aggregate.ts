import {
  TrainerDomainEntity,
  TrainingDomainEntity,
  TrainingEquipmentDomainEntity,
  TrainingFieldDomainEntity,
  WorkoutDomainEntity,
} from '../entities';
import {
  DateValueObject,
  TypeValueObject,
  NameValueObject,
  SpecialtyValueObject,
  GoalValueObject,
} from '../value-objects';
import {
  AddedTrainerEventPublisher,
  AddedTrainingEquipmentEventPublisher,
  AddedTrainingFieldEventPublisher,
  AddedWorkoutEventPublisher,
  RegisteredTrainingEventPublisher,
  UpdatedDurationEventPublisher,
  UpdatedNameEventPublisher,
  UpdatedTrainerSpecialtyEventPublisher,
  UpdatedTrainingEquipmentTypeEventPublisher,
  UpdatedTrainingFieldNameEventPublisher,
  UpdatedWorkoutGoalEventPublisher,
} from '../events';
import {
  ITrainerDomainService,
  ITrainingDomainService,
  ITrainingEquipmentDomainService,
  ITrainingFieldDomainService,
  IWorkoutDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { IAddTrainerCommand, IAddTrainingEquipmentCommand, IAddTrainingFieldCommand, IAddWorkoutCommand, IRegisterTrainingCommand, IUpdateDurationCommand, IUpdateNameCommand, IUpdateTrainerSpecialtyCommand, IUpdateTrainingEquipmentTypeCommand, IUpdateTrainingFieldNameCommand, IUpdateWorkoutGoalCommand } from '../interfaces';

export class TrainingAggregate implements ITrainingDomainService {
  constructor(
    private readonly trainingService?: ITrainingDomainService,
    private readonly trainingEquipmentService?: ITrainingEquipmentDomainService,
    private readonly trainingFieldService?: ITrainingFieldDomainService,
    private readonly trainerService?: ITrainerDomainService,
    private readonly workoutService?: IWorkoutDomainService,
    private readonly registeredTrainingEventPublisher?: RegisteredTrainingEventPublisher,
    private readonly addedTrainingEquipmentEventPublisher?: AddedTrainingEquipmentEventPublisher,
    private readonly addedTrainingFieldEventPublisher?: AddedTrainingFieldEventPublisher,
    private readonly addedTrainerEventPublisher?: AddedTrainerEventPublisher,
    private readonly addedWorkoutEventPublisher?: AddedWorkoutEventPublisher,
    private readonly updatedDurationEventPublisher?: UpdatedDurationEventPublisher,
    private readonly updatedTrainingEquipmentTypeEventPublisher?: UpdatedTrainingEquipmentTypeEventPublisher,
    private readonly updatedNameEventPublisher?: UpdatedNameEventPublisher,
    private readonly updatedTrainingFieldNameEventPublisher?: UpdatedTrainingFieldNameEventPublisher,
    private readonly updatedTrainerSpecialtyEventPublisher?: UpdatedTrainerSpecialtyEventPublisher,
    private readonly updatedWorkoutGoalEventPublisher?: UpdatedWorkoutGoalEventPublisher,
  ) {}
  async registerTraining(
    training: IRegisterTrainingCommand,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.registeredTrainingEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.registerTraining(training);
    this.registeredTrainingEventPublisher.response = result;
    this.registeredTrainingEventPublisher.publish();
    return result;
  }
  async addTrainingEquipment(
    trainingEquipment: IAddTrainingEquipmentCommand,
  ): Promise<TrainingEquipmentDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.addedTrainingEquipmentEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.addTrainingEquipment(
      trainingEquipment,
    );
    this.addedTrainingEquipmentEventPublisher.response = result;
    this.addedTrainingEquipmentEventPublisher.publish();
    return result;
  }
  async addTrainingField(
    trainingField: IAddTrainingFieldCommand,
  ): Promise<TrainingFieldDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.addedTrainingFieldEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.addTrainingField(trainingField);
    this.addedTrainingFieldEventPublisher.response = result;
    this.addedTrainingFieldEventPublisher.publish();
    return result;
  }
  async addTrainer(trainer: IAddTrainerCommand): Promise<TrainerDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.addedTrainerEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.addTrainer(trainer);
    this.addedTrainerEventPublisher.response = result;
    this.addedTrainerEventPublisher.publish();
    return result;
  }
  async addWorkout(workout: IAddWorkoutCommand): Promise<WorkoutDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.addedWorkoutEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.addWorkout(workout);
    this.addedWorkoutEventPublisher.response = result;
    this.addedWorkoutEventPublisher.publish();
    return result;
  }
  async updateDuration(
    date: IUpdateDurationCommand,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.updatedDurationEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.updateDuration(date);
    this.updatedDurationEventPublisher.response = result;
    this.updatedDurationEventPublisher.publish();
    return result;
  }
  async updateTrainingEquipmentType(
    type: IUpdateTrainingEquipmentTypeCommand,
  ): Promise<TrainingEquipmentDomainEntity> {
    if (!this.trainingEquipmentService)
      throw new AggregateRootException('Training Equipment service undefined');
    if (!this.updatedTrainingEquipmentTypeEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingEquipmentService.updateType(
      type,
    );
    this.updatedTrainingEquipmentTypeEventPublisher.response = result;
    this.updatedTrainingEquipmentTypeEventPublisher.publish();
    return result;
  }
  async updateTrainingFieldName(
    name: IUpdateTrainingFieldNameCommand,
  ): Promise<TrainingFieldDomainEntity> {
    if (!this.trainingFieldService)
      throw new AggregateRootException('Training Field service undefined');
    if (!this.updatedTrainingFieldNameEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingFieldService.updateName(name);
    this.updatedTrainingFieldNameEventPublisher.response = result;
    this.updatedTrainingFieldNameEventPublisher.publish();
    return result;
  }
  async updateTrainerSpecialty(
    specialty: IUpdateTrainerSpecialtyCommand,
  ): Promise<TrainerDomainEntity> {
    if (!this.trainerService)
      throw new AggregateRootException('Trainer service undefined');
    if (!this.updatedTrainerSpecialtyEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainerService.updateSpecialty(
      specialty,
    );
    this.updatedTrainerSpecialtyEventPublisher.response = result;
    this.updatedTrainerSpecialtyEventPublisher.publish();
    return result;
  }
  async updateWorkoutGoal(
    goal: IUpdateWorkoutGoalCommand,
  ): Promise<WorkoutDomainEntity> {
    if (!this.workoutService)
      throw new AggregateRootException('Training service undefined');
    if (!this.updatedWorkoutGoalEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.workoutService.updateGoal(goal);
    this.updatedWorkoutGoalEventPublisher.response = result;
    this.updatedWorkoutGoalEventPublisher.publish();
    return result;
  }
  async updateName(
    name: IUpdateNameCommand,
  ): Promise<TrainingDomainEntity> {
    if (!this.trainingService)
      throw new AggregateRootException('Training service undefined');
    if (!this.updatedNameEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.trainingService.updateName(name);
    this.updatedNameEventPublisher.response = result;
    this.updatedNameEventPublisher.publish();
    return result;
  }
}
