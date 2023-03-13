import {
  TeamDomainEntity,
  CoachDomainEntity,
  PlayerDomainEntity,
  ITeamDomainEntity,
  ICoachDomainEntity,
  IPlayerDomainEntity,
} from '../entities';
import {
  ICoachDomainService,
  IPlayerDomainService,
  ITeamDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { TeamAggregateHelper } from './interfaces/team-helper';
import { IUpdateCoachWageCommand, IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand } from '../interfaces';
export class TeamAggregate implements ITeamDomainService, IPlayerDomainService, ICoachDomainService {
  constructor(
    private readonly teamAggregateHelper: TeamAggregateHelper
  ) {}
  async getCoach(id: string): Promise<CoachDomainEntity> {
    if (!this.teamAggregateHelper.coachService)
      throw new AggregateRootException('Coach service undefined');

      const result = await this.teamAggregateHelper.coachService.getCoach(id);
      return result;
  }
  async getPlayers(id: string[]): Promise<PlayerDomainEntity[]> {
    if (!this.teamAggregateHelper.playerService)
      throw new AggregateRootException('Player service undefined');

      const result = await this.teamAggregateHelper.playerService.getPlayers(id);
      return result;
  }
  async getTeam(id: string): Promise<TeamDomainEntity> {
    if (!this.teamAggregateHelper.teamService)
    throw new AggregateRootException('Team service undefined');

    const result = await this.teamAggregateHelper.teamService.getTeam(id);
    return result;
  }
  async registerTeam(team: ITeamDomainEntity): Promise<TeamDomainEntity> {
    if (!this.teamAggregateHelper.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.teamAggregateHelper.registeredTeamEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.teamService.registerTeam(team);
    this.teamAggregateHelper.registeredTeamEventPublisher.response = result;
    this.teamAggregateHelper.registeredTeamEventPublisher.publish();
    return result;
  }
  async addCoach(coach: ICoachDomainEntity): Promise<CoachDomainEntity> {
    if (!this.teamAggregateHelper.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.teamAggregateHelper.addedCoachEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.teamService.addCoach(coach);
    this.teamAggregateHelper.addedCoachEventPublisher.response = result;
    this.teamAggregateHelper.addedCoachEventPublisher.publish();
    return result;
  }
  async addPlayer(player: IPlayerDomainEntity): Promise<PlayerDomainEntity> {
    if (!this.teamAggregateHelper.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.teamAggregateHelper.addedPlayerEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.teamService.addPlayer(player);
    this.teamAggregateHelper.addedPlayerEventPublisher.response = result;
    this.teamAggregateHelper.addedPlayerEventPublisher.publish();
    return result;
  }
  async updateCoachWage(
    wage: IUpdateCoachWageCommand,
  ): Promise<CoachDomainEntity> {
    if (!this.teamAggregateHelper.coachService)
      throw new AggregateRootException('Coach service undefined');
    if (!this.teamAggregateHelper.updatedCoachWageEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.coachService.updateCoachWage(wage);
    this.teamAggregateHelper.updatedCoachWageEventPublisher.response = result;
    this.teamAggregateHelper.updatedCoachWageEventPublisher.publish();
    return result;
  }
  async updatePlayerWage(
    wage: IUpdatePlayerWageCommand,
  ): Promise<PlayerDomainEntity> {
    if (!this.teamAggregateHelper.playerService)
      throw new AggregateRootException('Player service undefined');
    if (!this.teamAggregateHelper.updatedPlayerWageEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.playerService.updatePlayerWage(wage);
    this.teamAggregateHelper.updatedPlayerWageEventPublisher.response = result;
    this.teamAggregateHelper.updatedPlayerWageEventPublisher.publish();
    return result;
  }
  async updatePlayerPosition(
    position: IUpdatePlayerPositionCommand,
  ): Promise<PlayerDomainEntity> {
    if (!this.teamAggregateHelper.playerService)
      throw new AggregateRootException('Player service undefined');
    if (!this.teamAggregateHelper.updatedPlayerPositionEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamAggregateHelper.playerService.updatePlayerPosition(position);
    this.teamAggregateHelper.updatedPlayerPositionEventPublisher.response = result;
    this.teamAggregateHelper.updatedPlayerPositionEventPublisher.publish();
    return result;
  }
}
