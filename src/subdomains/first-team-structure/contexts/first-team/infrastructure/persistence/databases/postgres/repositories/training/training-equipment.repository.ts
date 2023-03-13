import { IBase } from '../base/base.interface';
import { TrainingEquipmentPostgreEntity } from '../../entities/training/training-equipment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
export class TrainingEquipmentRepository implements IBase<TrainingEquipmentPostgreEntity> {
    constructor(
        @InjectRepository(TrainingEquipmentPostgreEntity)
        private trainingEquipmentRepository: Repository<TrainingEquipmentPostgreEntity>
    ) {}
    async create(entity: TrainingEquipmentPostgreEntity): Promise<TrainingEquipmentPostgreEntity> {
        return await this.trainingEquipmentRepository.save(entity);
    }
    async update(id: string, entity: TrainingEquipmentPostgreEntity): Promise<TrainingEquipmentPostgreEntity> {
        const dbEntity = await this.trainingEquipmentRepository.findOneBy({trainingEquipmentId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                trainingEquipmentId: id
            }
            return this.trainingEquipmentRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<TrainingEquipmentPostgreEntity[]> {
        return await this.trainingEquipmentRepository.find();
    }
    async findOne(id: string): Promise<TrainingEquipmentPostgreEntity> {
        const entity = await this.trainingEquipmentRepository.findOneBy({trainingEquipmentId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}