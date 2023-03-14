import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchPostgreEntity } from '../../entities/match/match.entity';
import { IBase } from '../base/base.interface';
export class MatchRepository implements IBase<MatchPostgreEntity> {
    constructor(
        @InjectRepository(MatchPostgreEntity)
        private matchRepository: Repository<MatchPostgreEntity>
    ) {}
    async create(entity: MatchPostgreEntity): Promise<MatchPostgreEntity> {
        return await this.matchRepository.save(entity);
    }
    async update(id: string, entity: MatchPostgreEntity): Promise<MatchPostgreEntity> {
        const dbEntity = await this.matchRepository.findOneBy({matchId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                matchId: id
            }
            return this.matchRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<MatchPostgreEntity[]> {
        return await this.matchRepository.find();
    }
    async findOne(id: string): Promise<MatchPostgreEntity> {
        const entity = await this.matchRepository.findOneBy({matchId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}