import { TrainerRepository } from '../../repositories/training/trainer.repository';
import { Injectable } from '@nestjs/common';
import { TrainerPostgreEntity } from '../../entities/training/trainer.entity';
import { ITrainerDomainService, IUpdateTrainerSpecialtyCommand, TrainerDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
@Injectable()
export class TrainerPostgreService implements ITrainerDomainService{
    constructor(private readonly trainerRepository: TrainerRepository) {}
    getTrainer(id: string): Promise<TrainerDomainEntity> {
        return this.trainerRepository.findOne(id);
    }
    updateTrainerSpecialty(specialty: IUpdateTrainerSpecialtyCommand): Promise<TrainerDomainEntity> {
        let newEntity: TrainerPostgreEntity;

        this.trainerRepository.findOne(specialty.trainerId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.specialty = specialty.specialty.valueOf();

        return this.trainerRepository.update(specialty.trainerId, newEntity);
    }
}