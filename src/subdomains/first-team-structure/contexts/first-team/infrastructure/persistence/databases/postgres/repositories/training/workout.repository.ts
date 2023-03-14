import { IBase } from '../base/base.interface';
import { WorkoutPostgreEntity } from '../../entities/training/workout.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
export class WorkoutRepository implements IBase<WorkoutPostgreEntity> {
    constructor(
        @InjectRepository(WorkoutPostgreEntity)
        private workoutRepository: Repository<WorkoutPostgreEntity>
    ) {}
    async create(entity: WorkoutPostgreEntity): Promise<WorkoutPostgreEntity> {
        return await this.workoutRepository.save(entity);
    }
    async update(id: string, entity: WorkoutPostgreEntity): Promise<WorkoutPostgreEntity> {
        const dbEntity = await this.workoutRepository.findOneBy({workoutId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                workoutId: id
            }
            return this.workoutRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<WorkoutPostgreEntity[]> {
        return await this.workoutRepository.find();
    }
    async findOne(id: string): Promise<WorkoutPostgreEntity> {
        const entity = await this.workoutRepository.findOneBy({workoutId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}