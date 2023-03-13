import { CoachDomainEntity, ICoachDomainEntity, IPlayerDomainEntity, ITeamDomainEntity, PlayerDomainEntity } from '../entities';
import { TeamDomainEntity } from '../entities/team.domain-entity';

export interface ITeamDomainService {
    registerTeam(team: ITeamDomainEntity): Promise<TeamDomainEntity | null>;
    addCoach(coach: ICoachDomainEntity): Promise<CoachDomainEntity | null>;
    addPlayer(player: IPlayerDomainEntity): Promise<PlayerDomainEntity | null>;
    // updateCoachWage(wage: IUpdateCoachWageCommand): Promise<CoachDomainEntity | null>;
    // updatePlayerWage(wage: IUpdatePlayerWageCommand): Promise<PlayerDomainEntity | null>;
    // updatePlayerPosition(position: IUpdatePlayerPositionCommand): Promise<PlayerDomainEntity | null>;
    getTeam(id: string): Promise<TeamDomainEntity | null>;
    // getPlayersId(id: string): Promise<IdValueObject[] | null>;
    // getCoachId(id: string): Promise<IdValueObject | null>;
}