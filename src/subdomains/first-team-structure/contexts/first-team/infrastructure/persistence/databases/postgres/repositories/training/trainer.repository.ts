import { IBase } from '../base/base.interface';
import { TrainerPostgreEntity } from '../../entities/training/trainer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
export class TrainerRepository implements IBase<TrainerPostgreEntity> {
    constructor(
        @InjectRepository(TrainerPostgreEntity)
        private trainerRepository: Repository<TrainerPostgreEntity>
    ) {}
    async create(entity: TrainerPostgreEntity): Promise<TrainerPostgreEntity> {
        return await this.trainerRepository.save(entity);
    }
    async update(id: string, entity: TrainerPostgreEntity): Promise<TrainerPostgreEntity> {
        const dbEntity = await this.trainerRepository.findOneBy({trainerId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                trainerId: id
            }
            return this.trainerRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<TrainerPostgreEntity[]> {
        return await this.trainerRepository.find();
    }
    async findOne(id: string): Promise<TrainerPostgreEntity> {
        const entity = await this.trainerRepository.findOneBy({trainerId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}