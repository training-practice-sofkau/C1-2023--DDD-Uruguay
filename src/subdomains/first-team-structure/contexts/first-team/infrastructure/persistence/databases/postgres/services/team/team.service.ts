import { Injectable } from '@nestjs/common';
import { TeamRepository } from '../../repositories/team/team.repository';
import { CoachRepository } from '../../repositories/team/coach.repository';
import { PlayerRepository } from '../../repositories/team/player.repository';
import { TeamPostgreEntity } from '../../entities/team/team.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CoachPostgreEntity } from '../../entities/team/coach.entity';
import { PlayerPostgreEntity } from '../../entities/team/player.entity';
import { CoachDomainEntity, ICoachDomainEntity, IPlayerDomainEntity, ITeamDomainEntity, ITeamDomainService, PlayerDomainEntity, TeamDomainEntity } from 'src/subdomains/first-team-structure/contexts/first-team/domain';
@Injectable()
export class TeamPostgreService implements ITeamDomainService{
    constructor(private readonly teamRepository: TeamRepository,
        private readonly coachRepository: CoachRepository,
        private readonly playerRepository: PlayerRepository) {}
    registerTeam(team: ITeamDomainEntity): Promise<TeamDomainEntity> {
        const newEntity = new TeamPostgreEntity();

        newEntity.teamId = team.teamId.valueOf();
        newEntity.name = team.name.valueOf();
        newEntity.town = team.town.valueOf();
        
        this.coachRepository.findOne(team.coach.coachId.valueOf())
        .then(iCoach => newEntity.coach = iCoach)
        .catch(() => new NotFoundException('Coach Entity Not Found'))

        return this.teamRepository.create(newEntity);
    }
    addCoach(coach: ICoachDomainEntity): Promise<CoachDomainEntity> {
        const newEntity = new CoachPostgreEntity();

        if(coach.coachId) newEntity.coachId = coach.coachId.valueOf();
        newEntity.fullName = coach.fullName.valueOf();
        newEntity.country = coach.country.valueOf();
        newEntity.wage = coach.wage.valueOf();
        newEntity.age = coach.age.valueOf();

        return this.coachRepository.create(newEntity);
    }
    addPlayer(player: IPlayerDomainEntity): Promise<PlayerDomainEntity> {
        const newEntity = new PlayerPostgreEntity();

        if(player.playerId) newEntity.playerId = player.playerId.valueOf();
        newEntity.fullName = player.fullName.valueOf();
        newEntity.country = player.country.valueOf();
        newEntity.wage = player.wage.valueOf();
        newEntity.age = player.age.valueOf();
        newEntity.position = player.position.valueOf();

        this.teamRepository.findOne(player.team.teamId.valueOf())
        .then(iTeam => newEntity.team = iTeam)
        .catch(() => new NotFoundException('Entity Not Found'));

        return this.playerRepository.create(newEntity);
    }
    getTeam(id: string): Promise<TeamDomainEntity> {
        return this.teamRepository.findOne(id);
    }
}