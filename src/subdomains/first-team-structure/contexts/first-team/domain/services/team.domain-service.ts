import { CoachDomainEntity, PlayerDomainEntity } from '../entities';
import { TeamDomainEntity } from '../entities/team.domain-entity';
import { IAddCoachCommand, IAddPlayerCommand, IRegisterMatchCommand, IRegisterTeamCommand, IUpdateCoachWageCommand, IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand } from '../interfaces';

export interface ITeamDomainService {
    registerTeam(team: IRegisterTeamCommand): Promise<TeamDomainEntity | null>;
    addCoach(coach: IAddCoachCommand): Promise<CoachDomainEntity | null>;
    addPlayer(player: IAddPlayerCommand): Promise<PlayerDomainEntity | null>;
    updateCoachWage(wage: IUpdateCoachWageCommand): Promise<CoachDomainEntity | null>;
    updatePlayerWage(wage: IUpdatePlayerWageCommand): Promise<PlayerDomainEntity | null>;
    updatePlayerPosition(position: IUpdatePlayerPositionCommand): Promise<PlayerDomainEntity | null>;
    // getTeamById(id: string): Promise<IdValueObject | null>;
    // getPlayersId(id: string): Promise<IdValueObject[] | null>;
    // getCoachId(id: string): Promise<IdValueObject | null>;
}