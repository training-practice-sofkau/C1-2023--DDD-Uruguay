import { Injectable } from "@nestjs/common/decorators";
import { ITrainerDomainEntity, ITrainingDomainEntity, ITrainingDomainService, ITrainingEquipmentDomainEntity, ITrainingFieldDomainEntity, IUpdateDurationCommand, IUpdateNameCommand, IWorkoutDomainEntity, TeamDomainEntity, TrainerDomainEntity, TrainingDomainEntity, TrainingEquipmentDomainEntity, TrainingFieldDomainEntity, WorkoutDomainEntity } from "src/subdomains/first-team-structure/contexts/first-team/domain";
import { TrainingRepository } from "../../repositories/training/training.repository";
import { TrainingPostgreEntity } from '../../entities/training/training.entity';
import { TeamRepository } from "../../repositories/team/team.repository";
import { TrainerRepository } from '../../repositories/training/trainer.repository';
import { WorkoutRepository } from '../../repositories/training/workout.repository';
import { TrainingEquipmentRepository } from '../../repositories/training/training-equipment.repository';
import { NotFoundException } from '@nestjs/common/exceptions';
import { TrainingFieldRepository } from '../../repositories/training/training-field.repository';
import { TrainingEquipmentPostgreEntity } from '../../entities/training/training-equipment.entity';
import { WorkoutPostgreEntity } from '../../entities/training/workout.entity';
import { TrainingFieldPostgreEntity } from '../../entities/training/training-field-entity';
import { TrainerPostgreEntity } from '../../entities/training/trainer.entity';

@Injectable()
export class TrainingPostgreService implements ITrainingDomainService{
    constructor(private readonly trainingRepository: TrainingRepository,
        private readonly teamRepository: TeamRepository,
        private readonly trainerRepository: TrainerRepository,
        private readonly workoutRepository: WorkoutRepository,
        private readonly trainingFieldRepository: TrainingFieldRepository,
        private readonly trainingEquipmentRepository: TrainingEquipmentRepository) {}
    registerTraining(training: ITrainingDomainEntity): Promise<TrainingDomainEntity> {
        const newEntity = new TrainingPostgreEntity();

        if(training.trainingId) newEntity.trainingId = training.trainingId.valueOf();
        newEntity.name = training.name.valueOf();
        newEntity.duration = training.duration.valueOf();
        
        this.teamRepository.findOne(training.team.teamId.valueOf())
        .then(iTeam => newEntity.team = iTeam)
        .catch(() => new NotFoundException('Entity Not Found'))

        this.trainerRepository.findOne(training.trainer.trainerId.valueOf())
        .then(iTrainer => newEntity.trainer = iTrainer)
        .catch(() => new NotFoundException('Entity Not Found'))

        this.trainingFieldRepository.findOne(training.trainingField.trainingFieldId.valueOf())
        .then(iField => newEntity.trainingField = iField)
        .catch(() => new NotFoundException('Entity Not Found'))

        return this.trainingRepository.create(newEntity);
    }
    addTrainingEquipment(trainingEquipment: ITrainingEquipmentDomainEntity): Promise<TrainingEquipmentDomainEntity> {
        const newEntity = new TrainingEquipmentPostgreEntity();

        if(trainingEquipment.trainingEquipmentId) newEntity.trainingEquipmentId = trainingEquipment.trainingEquipmentId.valueOf();
        newEntity.name = trainingEquipment.name.valueOf();
        newEntity.type = trainingEquipment.type.valueOf();

        this.trainingRepository.findOne(trainingEquipment.training.trainingId.valueOf())
        .then(iTraining => newEntity.training = iTraining)
        .catch(() => new NotFoundException('Entity Not Found'))

        return this.trainingEquipmentRepository.create(newEntity);
    }
    addTrainingField(trainingField: ITrainingFieldDomainEntity): Promise<TrainingFieldDomainEntity> {
        const newEntity = new TrainingFieldPostgreEntity();

        if(trainingField.trainingFieldId) newEntity.trainingFieldId = trainingField.trainingFieldId.valueOf();
        newEntity.name = trainingField.name.valueOf();
        newEntity.town = trainingField.town.valueOf();

        return this.trainingFieldRepository.create(newEntity)
    }
    addTrainer(trainer: ITrainerDomainEntity): Promise<TrainerDomainEntity> {
        const newEntity = new TrainerPostgreEntity();

        if(trainer.trainerId) newEntity.trainerId = trainer.trainerId.valueOf();
        newEntity.age = trainer.age.valueOf();
        newEntity.country = trainer.country.valueOf();
        newEntity.fullName = trainer.fullName.valueOf();
        newEntity.specialty = trainer.specialty.valueOf();

        return this.trainerRepository.create(newEntity)
    }
    addWorkout(workout: IWorkoutDomainEntity): Promise<WorkoutDomainEntity> {
        const newEntity = new WorkoutPostgreEntity();

        if(workout.workoutId) newEntity.workoutId = workout.workoutId.valueOf();
        newEntity.name = workout.name.valueOf();
        newEntity.type = workout.type.valueOf();
        newEntity.goal = workout.goal.valueOf();

        this.trainingRepository.findOne(workout.training.trainingId.valueOf())
        .then(iTraining => newEntity.training = iTraining)
        .catch(() => new NotFoundException('Entity Not Found'))

        return this.workoutRepository.create(newEntity);
    }
    updateDuration(date: IUpdateDurationCommand): Promise<TrainingDomainEntity> {
        let newEntity: TrainingPostgreEntity;

        this.trainingRepository.findOne(date.trainingId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.duration = date.duration.valueOf();

        return this.trainingRepository.update(date.trainingId, newEntity);
    }
    updateName(name: IUpdateNameCommand): Promise<TrainingDomainEntity> {
        let newEntity: TrainingPostgreEntity;

        this.trainingRepository.findOne(name.trainingId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.name = name.name.valueOf();

        return this.trainingRepository.update(name.trainingId, newEntity);
    }
    getTraining(id: string): Promise<TrainingDomainEntity> {
        return this.trainingRepository.findOne(id);
    }
    getTeam(id: string): Promise<TeamDomainEntity> {
        return this.teamRepository.findOne(id);
    }

}