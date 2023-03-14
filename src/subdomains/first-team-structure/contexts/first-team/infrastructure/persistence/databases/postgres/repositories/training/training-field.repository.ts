import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TrainingFieldPostgreEntity } from "../../entities/training/training-field-entity";
import { IBase } from "../base/base.interface";

export class TrainingFieldRepository implements IBase<TrainingFieldPostgreEntity> {
    constructor(
        @InjectRepository(TrainingFieldPostgreEntity)
        private trainingFieldRepository: Repository<TrainingFieldPostgreEntity>
    ) {}
    async create(entity: TrainingFieldPostgreEntity): Promise<TrainingFieldPostgreEntity> {
        return await this.trainingFieldRepository.save(entity);
    }
    async update(id: string, entity: TrainingFieldPostgreEntity): Promise<TrainingFieldPostgreEntity> {
        const dbEntity = await this.trainingFieldRepository.findOneBy({trainingFieldId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                trainingFieldId: id
            }
            return this.trainingFieldRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<TrainingFieldPostgreEntity[]> {
        return await this.trainingFieldRepository.find();
    }
    async findOne(id: string): Promise<TrainingFieldPostgreEntity> {
        const entity = await this.trainingFieldRepository.findOneBy({trainingFieldId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}