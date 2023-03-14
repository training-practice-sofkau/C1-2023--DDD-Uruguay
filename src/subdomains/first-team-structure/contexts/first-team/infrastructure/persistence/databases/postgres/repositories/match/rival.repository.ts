import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RivalPostgreEntity } from '../../entities/match/rival.entity';
import { IBase } from '../base/base.interface';

export class RivalRepository implements IBase<RivalPostgreEntity> {
    constructor(
        @InjectRepository(RivalPostgreEntity)
        private rivalRepository: Repository<RivalPostgreEntity>
    ) {}
    async create(entity: RivalPostgreEntity): Promise<RivalPostgreEntity> {
        return await this.rivalRepository.save(entity);
    }
    async update(id: string, entity: RivalPostgreEntity): Promise<RivalPostgreEntity> {
        const dbEntity = await this.rivalRepository.findOneBy({rivalId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                rivalId: id
            }
            return this.rivalRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<RivalPostgreEntity[]> {
        return await this.rivalRepository.find();
    }
    async findOne(id: string): Promise<RivalPostgreEntity> {
        const entity = await this.rivalRepository.findOneBy({rivalId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}