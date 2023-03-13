import { TrainingEquipmentRepository } from '../../repositories/training/training-equipment.repository';
import { Injectable } from '@nestjs/common';
import { TrainingEquipmentPostgreEntity } from '../../entities/training/training-equipment.entity';
import { ITrainingEquipmentDomainService, IUpdateTrainingEquipmentTypeCommand, TrainingEquipmentDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';

@Injectable()
export class TrainingEquipmentPostgreService implements ITrainingEquipmentDomainService{
    constructor(private readonly trainingEquipmentRepository: TrainingEquipmentRepository) {}
    getTrainingEquipment(id: string[]): Promise<TrainingEquipmentDomainEntity[]> {
        return this.trainingEquipmentRepository.find();
    }
    updateTrainingEquipmentType(type: IUpdateTrainingEquipmentTypeCommand): Promise<TrainingEquipmentDomainEntity> {
        let newEntity: TrainingEquipmentPostgreEntity;

        this.trainingEquipmentRepository.findOne(type.trainingEquipmentId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.type = type.type.valueOf();

        return this.trainingEquipmentRepository.update(type.trainingEquipmentId, newEntity);
    }
}