import { TrainingFieldRepository } from '../../repositories/training/training-field.repository';
import { Injectable } from '@nestjs/common';
import { TrainingFieldPostgreEntity } from '../../entities/training/training-field-entity';
import { ITrainingFieldDomainService, IUpdateTrainingFieldNameCommand, TrainingFieldDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';

@Injectable()
export class TrainingFieldPostgreService implements ITrainingFieldDomainService{
    constructor(private readonly trainingFieldRepository: TrainingFieldRepository) {}
    getTrainingField(id: string): Promise<TrainingFieldDomainEntity> {
        return this.trainingFieldRepository.findOne(id);
    }
    updateTrainingFieldName(name: IUpdateTrainingFieldNameCommand): Promise<TrainingFieldDomainEntity> {
        let newEntity: TrainingFieldPostgreEntity;

        this.trainingFieldRepository.findOne(name.trainingFieldId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.name = name.name.valueOf();

        return this.trainingFieldRepository.update(name.trainingFieldId, newEntity);
    }
}