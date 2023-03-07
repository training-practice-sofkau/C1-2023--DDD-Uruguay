import {
  TeamDomainEntity,
  CoachDomainEntity,
  PlayerDomainEntity,
} from '../entities';
import {
  WageValueObject,
  PositionValueObject,
} from '../value-objects';
import {
  AddedCoachEventPublisher,
  AddedPlayerEventPublisher,
  RegisteredTeamEventPublisher,
  UpdatedCoachWageEventPublisher,
  UpdatedPlayerPositionEventPublisher,
  UpdatedPlayerWageEventPublisher,
} from '../events';
import {
  ICoachDomainService,
  IPlayerDomainService,
  ITeamDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { IAddCoachCommand, IAddPlayerCommand, IRegisterTeamCommand, IUpdateCoachWageCommand, IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand } from '../interfaces';
export class TeamAggregate implements ITeamDomainService {
  constructor(
    private readonly teamService?: ITeamDomainService,
    private readonly coachService?: ICoachDomainService,
    private readonly playerService?: IPlayerDomainService,
    private readonly registeredTeamEventPublisher?: RegisteredTeamEventPublisher,
    private readonly addedCoachEventPublisher?: AddedCoachEventPublisher,
    private readonly addedPlayerEventPublisher?: AddedPlayerEventPublisher,
    private readonly updatedCoachWageEventPublisher?: UpdatedCoachWageEventPublisher,
    private readonly updatedPlayerWageEventPublisher?: UpdatedPlayerWageEventPublisher,
    private readonly updatedPlayerPositionEventPublisher?: UpdatedPlayerPositionEventPublisher,
  ) {}
  async registerTeam(team: IRegisterTeamCommand): Promise<TeamDomainEntity> {
    if (!this.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.registeredTeamEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamService.registerTeam(team);
    this.registeredTeamEventPublisher.response = result;
    this.registeredTeamEventPublisher.publish();
    return result;
  }
  async addCoach(coach: IAddCoachCommand): Promise<CoachDomainEntity> {
    if (!this.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.addedCoachEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamService.addCoach(coach);
    this.addedCoachEventPublisher.response = result;
    this.addedCoachEventPublisher.publish();
    return result;
  }
  async addPlayer(player: IAddPlayerCommand): Promise<PlayerDomainEntity> {
    if (!this.teamService)
      throw new AggregateRootException('Team service undefined');
    if (!this.addedPlayerEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.teamService.addPlayer(player);
    this.addedPlayerEventPublisher.response = result;
    this.addedPlayerEventPublisher.publish();
    return result;
  }
  async updateCoachWage(
    wage: IUpdateCoachWageCommand,
  ): Promise<CoachDomainEntity> {
    if (!this.coachService)
      throw new AggregateRootException('Coach service undefined');
    if (!this.updatedCoachWageEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.coachService.updateWage(wage);
    this.updatedCoachWageEventPublisher.response = result;
    this.updatedCoachWageEventPublisher.publish();
    return result;
  }
  async updatePlayerWage(
    wage: IUpdatePlayerWageCommand,
  ): Promise<PlayerDomainEntity> {
    if (!this.playerService)
      throw new AggregateRootException('Player service undefined');
    if (!this.updatedPlayerWageEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.playerService.updateWage(wage);
    this.updatedPlayerWageEventPublisher.response = result;
    this.updatedPlayerWageEventPublisher.publish();
    return result;
  }
  async updatePlayerPosition(
    position: IUpdatePlayerPositionCommand,
  ): Promise<PlayerDomainEntity> {
    if (!this.playerService)
      throw new AggregateRootException('Player service undefined');
    if (!this.updatedPlayerPositionEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.playerService.updatePosition(position);
    this.updatedPlayerPositionEventPublisher.response = result;
    this.updatedPlayerPositionEventPublisher.publish();
    return result;
  }
}
