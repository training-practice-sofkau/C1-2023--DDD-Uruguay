import { NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { PlayerPostgreEntity } from "../../entities/team/player.entity";
import { IBase } from "../base/base.interface";


export class PlayerRepository implements IBase<PlayerPostgreEntity>{
    constructor(
        @InjectRepository(PlayerPostgreEntity)
        private playerRepository: Repository<PlayerPostgreEntity>
    ) {}
    async create(entity: PlayerPostgreEntity): Promise<PlayerPostgreEntity> {
        return await this.playerRepository.save(entity);
    }
    async update(id: string, entity: PlayerPostgreEntity): Promise<PlayerPostgreEntity> {
        const dbEntity = await this.playerRepository.findOneBy({playerId: id})

        if(dbEntity) {
            const newEntity = {
                ...dbEntity,
                ...entity,
                playerId: id
            }
            return this.playerRepository.save(newEntity);
        }

        throw new Error('Entity not found')
    }
    async find(): Promise<PlayerPostgreEntity[]> {
        return await this.playerRepository.find();
    }
    async findOne(id: string): Promise<PlayerPostgreEntity> {
        const entity = await this.playerRepository.findOneBy({playerId: id});

        if(entity) return entity;

        throw new NotFoundException('Entity Not Found');
    }
}