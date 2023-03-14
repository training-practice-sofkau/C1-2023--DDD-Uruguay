import { PlayerRepository } from '../../repositories/team/player.repository';
import { Injectable } from '@nestjs/common';
import { PlayerPostgreEntity } from '../../entities/team/player.entity';
import { IPlayerDomainService, IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand, PlayerDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';

@Injectable()
export class PlayerPostgreService implements IPlayerDomainService{
    constructor(private readonly playerRepository: PlayerRepository) {}
    getPlayers(id: string[]): Promise<PlayerDomainEntity[]> {
        return this.playerRepository.find();
    }
    updatePlayerWage(wage: IUpdatePlayerWageCommand): Promise<PlayerDomainEntity> {
        let newEntity: PlayerPostgreEntity;

        this.playerRepository.findOne(wage.playerId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.wage = wage.wage.valueOf();

        return this.playerRepository.update(wage.playerId, newEntity);
    }
    updatePlayerPosition(position: IUpdatePlayerPositionCommand): Promise<PlayerDomainEntity> {
        let newEntity: PlayerPostgreEntity;

        this.playerRepository.findOne(position.playerId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.position = position.position.valueOf();

        return this.playerRepository.update(position.playerId, newEntity);
    }
}