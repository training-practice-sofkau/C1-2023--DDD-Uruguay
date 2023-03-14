import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrainingPostgreEntity } from '../../entities/training/training.entity';
import { IBase } from '../base/base.interface';
export class TrainingRepository implements IBase<TrainingPostgreEntity> {
    constructor(
        @InjectRepository(TrainingPostgreEntity)
        private trainingRepository: Repository<TrainingPostgreEntity>
    ) {}
    async create(entity: TrainingPostgreEntity): Promise<TrainingPostgreEntity> {
        return await this.trainingRepository.save(entity);
    }
    async update(id: string, entity: TrainingPostgreEntity): Promise<TrainingPostgreEntity> {
        const dbEntity = await this.trainingRepository.findOneBy({trainingId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                trainingId: id
            }
            return this.trainingRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<TrainingPostgreEntity[]> {
        return await this.trainingRepository.find();
    }
    async findOne(id: string): Promise<TrainingPostgreEntity> {
        const entity = await this.trainingRepository.findOneBy({trainingId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}