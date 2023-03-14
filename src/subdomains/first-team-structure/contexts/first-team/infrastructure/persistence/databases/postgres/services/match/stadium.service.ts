import { Injectable } from '@nestjs/common';
import { StadiumRepository } from '../../repositories/match/stadium.repository';
import { StadiumPostgreEntity } from '../../entities/match/stadium.entity';
import { IUpdateStadiumCapacity, IUpdateStadiumSquareMeters, StadiumDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
import { IStadiumDomainService } from 'src/subdomains/first-team-structure/contexts/first-team/domain';

@Injectable()
export class StadiumPostgreService implements IStadiumDomainService{
    constructor(private readonly stadiumRepository: StadiumRepository) {}
    getStadium(id: string): Promise<StadiumDomainEntity> {
        return this.stadiumRepository.findOne(id);
    }
    updateStadiumCapacity(capacity: IUpdateStadiumCapacity): Promise<StadiumDomainEntity> {
        let newEntity: StadiumPostgreEntity;

        this.stadiumRepository.findOne(capacity.stadiumId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.capacity = capacity.capacity.valueOf();

        return this.stadiumRepository.update(capacity.stadiumId, newEntity);
    }
    updateStadiumSquareMeters(squareMeters: IUpdateStadiumSquareMeters): Promise<StadiumDomainEntity> {
        let newEntity: StadiumPostgreEntity;

        this.stadiumRepository.findOne(squareMeters.stadiumId)
        .then(iEntity => newEntity = iEntity)
        .catch(() => new Error('Entity Not Found'));

        newEntity.squareMeters = squareMeters.squareMeters.valueOf();

        return this.stadiumRepository.update(squareMeters.stadiumId, newEntity);
    }
}