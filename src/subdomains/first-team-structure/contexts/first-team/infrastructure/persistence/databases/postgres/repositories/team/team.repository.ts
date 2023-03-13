import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamPostgreEntity } from '../../entities/team/team.entity';
import { IBase } from '../base/base.interface';
export class TeamRepository implements IBase<TeamPostgreEntity> {
    constructor(
        @InjectRepository(TeamPostgreEntity)
        private teamRepository: Repository<TeamPostgreEntity>
    ) {}
    async create(entity: TeamPostgreEntity): Promise<TeamPostgreEntity> {
        return await this.teamRepository.save(entity);
    }
    async update(id: string, entity: TeamPostgreEntity): Promise<TeamPostgreEntity> {
        const dbEntity = await this.teamRepository.findOneBy({teamId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                teamId: id
            }
            return this.teamRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<TeamPostgreEntity[]> {
        return await this.teamRepository.find();
    }
    async findOne(id: string): Promise<TeamPostgreEntity> {
        const entity = await this.teamRepository.findOneBy({teamId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}