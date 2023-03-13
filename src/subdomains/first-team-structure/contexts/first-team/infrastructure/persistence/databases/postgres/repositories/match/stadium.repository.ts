import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StadiumPostgreEntity } from '../../entities/match/stadium.entity';
import { IBase } from '../base/base.interface';
export class StadiumRepository implements IBase<StadiumPostgreEntity> {
    constructor(
        @InjectRepository(StadiumPostgreEntity)
        private stadiumRepository: Repository<StadiumPostgreEntity>
    ) {}
    async create(entity: StadiumPostgreEntity): Promise<StadiumPostgreEntity> {
        return await this.stadiumRepository.save(entity);
    }
    async update(id: string, entity: StadiumPostgreEntity): Promise<StadiumPostgreEntity> {
        const dbEntity = await this.stadiumRepository.findOneBy({stadiumId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                stadiumId: id
            }
            return this.stadiumRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<StadiumPostgreEntity[]> {
        return await this.stadiumRepository.find();
    }
    async findOne(id: string): Promise<StadiumPostgreEntity> {
        const entity = await this.stadiumRepository.findOneBy({stadiumId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}