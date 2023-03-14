import { RivalRepository } from '../../repositories/match/rival.repository';
import { Injectable } from '@nestjs/common';
import { RivalPostgreEntity } from '../../entities/match/rival.entity';
import { IRivalDomainService, IUpdateRivalTownCommand, RivalDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
@Injectable()
export class RivalPostgreService implements IRivalDomainService{
    constructor(private readonly rivalRepository: RivalRepository) {}
    getRival(id: string): Promise<RivalDomainEntity> {
        return this.rivalRepository.findOne(id);
    }
    updateRivalTown(town: IUpdateRivalTownCommand): Promise<RivalDomainEntity> {
        let newEntity: RivalPostgreEntity;

        this.rivalRepository.findOne(town.rivalId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.town = town.town.valueOf();

        return this.rivalRepository.update(town.rivalId, newEntity);
    }
}