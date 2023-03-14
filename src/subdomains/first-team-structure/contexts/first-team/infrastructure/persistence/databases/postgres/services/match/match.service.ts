import { MatchRepository } from "../../repositories/match/match.repository";
import { Injectable, NotFoundException } from '@nestjs/common';
import { MatchPostgreEntity } from '../../entities/match/match.entity';
import { RivalRepository } from '../../repositories/match/rival.repository';
import { StadiumRepository } from '../../repositories/match/stadium.repository';
import { TeamRepository } from '../../repositories/team/team.repository';
import { RivalPostgreEntity } from '../../entities/match/rival.entity';
import { StadiumPostgreEntity } from '../../entities/match/stadium.entity';
import { IMatchDomainEntity, IMatchDomainService, IRivalDomainEntity, IStadiumDomainEntity, IUpdateDateCommand, MatchDomainEntity, RivalDomainEntity, StadiumDomainEntity, TeamDomainEntity } from "src/subdomains/first-team-structure/contexts/first-team/domain";

@Injectable()
export class MatchPostgreService implements IMatchDomainService{
    constructor(private readonly matchRepository: MatchRepository,
        private readonly rivalRepository: RivalRepository,
        private readonly stadiumRepository: StadiumRepository,
        private readonly teamRepository: TeamRepository,) {}
    registerMatch(match: IMatchDomainEntity): Promise<MatchDomainEntity> {
        const newEntity = new MatchPostgreEntity();

        newEntity.matchId = match.matchId.valueOf();
        newEntity.date = new Date(match.date.valueOf());
        newEntity.score = match.score.valueOf();
        
        this.rivalRepository.findOne(match.rival.rivalId.valueOf())
        .then(iRival => newEntity.rival = iRival)
        .catch(() => new NotFoundException('Rival Entity Not Found'))
        
        this.teamRepository.findOne(match.team.teamId.valueOf())
        .then(iTeam => newEntity.team = iTeam)
        .catch(() => new NotFoundException('Team Entity Not Found'))

        this.stadiumRepository.findOne(match.stadium.stadiumId.valueOf())
        .then(iStadium => newEntity.stadium = iStadium)
        .catch(() => new NotFoundException('Stadium Entity Not Found'))

        return this.matchRepository.create(newEntity);
    }
    async addRival(rival: IRivalDomainEntity): Promise<RivalDomainEntity> {
        const newEntity = new RivalPostgreEntity();

        if(rival.rivalId) newEntity.rivalId = rival.rivalId.valueOf();
        newEntity.name = rival.name.valueOf();
        newEntity.town = rival.town.valueOf();

        return this.rivalRepository.create(newEntity);
    }
    addStadium(stadium: IStadiumDomainEntity): Promise<StadiumDomainEntity> {
        const newEntity = new StadiumPostgreEntity();

        newEntity.stadiumId = stadium.stadiumId.valueOf();
        newEntity.name = stadium.name.valueOf();
        newEntity.town = stadium.town.valueOf();
        newEntity.capacity = stadium.capacity.valueOf();
        newEntity.squareMeters = stadium.squareMeters.valueOf();

        return this.stadiumRepository.create(newEntity);
    }
    updateDate(date: IUpdateDateCommand): Promise<MatchDomainEntity> {
        let newEntity: MatchPostgreEntity;

        this.matchRepository.findOne(date.matchId)
        .then(entity => newEntity = entity)
        .catch(() => new NotFoundException('Match Entity Not Found'))

        newEntity.date = new Date(date.date.valueOf());

        return this.matchRepository.update(date.matchId, newEntity)
    }
    getTeam(id: string): Promise<TeamDomainEntity> {
        return this.teamRepository.findOne(id);
    }
    getMatch(id: string): Promise<MatchDomainEntity> {
        return this.matchRepository.findOne(id);
    }
}