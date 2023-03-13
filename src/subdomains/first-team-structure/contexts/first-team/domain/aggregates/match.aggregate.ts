import {
  IMatchDomainEntity,
  IRivalDomainEntity,
  IStadiumDomainEntity,
  MatchDomainEntity,
  RivalDomainEntity,
  StadiumDomainEntity,
  TeamDomainEntity,
} from '../entities';
import {
  IMatchDomainService,
  IRivalDomainService,
  IStadiumDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { IUpdateDateCommand, IUpdateRivalTownCommand, IUpdateStadiumCapacity, IUpdateStadiumSquareMeters } from '../interfaces';
import { MatchAggregateHelper } from './interfaces/match-helper';
import { AddedRivalEventPublisher, AddedStadiumEventPublisher, RegisteredMatchEventPublisher, UpdatedDateEventPublisher, UpdatedRivalTownEventPublisher, UpdatedStadiumCapacityEventPublisher, UpdatedStadiumSquareMetersEventPublisher } from '../events';

export class MatchAggregate implements IMatchDomainService, IRivalDomainService, IStadiumDomainService {

  private readonly matchService?: IMatchDomainService;
  private readonly rivalService?: IRivalDomainService;
  private readonly stadiumService?: IStadiumDomainService;
  private readonly registeredMatchEventPublisher?: RegisteredMatchEventPublisher;
  private readonly addedRivalEventPublisher?: AddedRivalEventPublisher;
  private readonly addedStadiumEventPublisher?: AddedStadiumEventPublisher;
  private readonly updatedStadiumCapacityEventPublisher?: UpdatedStadiumCapacityEventPublisher;
  private readonly updatedStadiumSquareMetersEventPublisher?: UpdatedStadiumSquareMetersEventPublisher;
  private readonly updatedRivalTownEventPublisher?: UpdatedRivalTownEventPublisher;
  private readonly updatedDateEventPublisher?: UpdatedDateEventPublisher;
  
  constructor({
    matchService,
    rivalService,
    stadiumService,
    registeredMatchEventPublisher,
    addedRivalEventPublisher,
    addedStadiumEventPublisher,
    updatedStadiumCapacityEventPublisher,
    updatedStadiumSquareMetersEventPublisher,
    updatedRivalTownEventPublisher,
    updatedDateEventPublisher
  }: {
  matchService?: IMatchDomainService;
  rivalService?: IRivalDomainService;
  stadiumService?: IStadiumDomainService;
  registeredMatchEventPublisher?: RegisteredMatchEventPublisher;
  addedRivalEventPublisher?: AddedRivalEventPublisher;
  addedStadiumEventPublisher?: AddedStadiumEventPublisher;
  updatedStadiumCapacityEventPublisher?: UpdatedStadiumCapacityEventPublisher;
  updatedStadiumSquareMetersEventPublisher?: UpdatedStadiumSquareMetersEventPublisher;
  updatedRivalTownEventPublisher?: UpdatedRivalTownEventPublisher;
  updatedDateEventPublisher?: UpdatedDateEventPublisher;
  }) {
  this.matchService = matchService;
  this.rivalService = rivalService;
  this.stadiumService = stadiumService;
  this.registeredMatchEventPublisher = registeredMatchEventPublisher;
  this.addedRivalEventPublisher = addedRivalEventPublisher;
  this.addedStadiumEventPublisher = addedStadiumEventPublisher;
  this.updatedStadiumCapacityEventPublisher = updatedStadiumCapacityEventPublisher;
  this.updatedStadiumSquareMetersEventPublisher = updatedStadiumSquareMetersEventPublisher;
  this.updatedRivalTownEventPublisher = updatedRivalTownEventPublisher;
  this.updatedDateEventPublisher = updatedDateEventPublisher;
  }
  async getTeam(id: string): Promise<TeamDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Stadium service undefined');

      const result = await this.matchService.getTeam(id);
      return result;
  }
  async getStadium(id: string): Promise<StadiumDomainEntity> {
    if (!this.stadiumService)
      throw new AggregateRootException('Stadium service undefined');

      const result = await this.stadiumService.getStadium(id);
      return result;
  }
  async getRival(id: string): Promise<RivalDomainEntity> {
    if (!this.rivalService)
      throw new AggregateRootException('Rival service undefined');

      const result = await this.rivalService.getRival(id);
      return result;
  }
  async getMatch(id: string): Promise<MatchDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
      
      const result = await this.matchService.getMatch(id);
      return result;
  }
  async registerMatch(match: IMatchDomainEntity): Promise<MatchDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.registeredMatchEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.registerMatch(match);
    this.registeredMatchEventPublisher.response = result;
    this.registeredMatchEventPublisher.publish();
    return result;
  }
  async addRival(rival: IRivalDomainEntity): Promise<RivalDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.addedRivalEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.addRival(rival);
    this.addedRivalEventPublisher.response = result;
    this.addedRivalEventPublisher.publish();
    return result;
  }
  async addStadium(stadium: IStadiumDomainEntity): Promise<StadiumDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.addedStadiumEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.addStadium(stadium);
    this.addedStadiumEventPublisher.response = result;
    this.addedStadiumEventPublisher.publish();
    return result;
  }
  async updateStadiumCapacity(
    capacity: IUpdateStadiumCapacity,
  ): Promise<StadiumDomainEntity> {
    if (!this.stadiumService)
      throw new AggregateRootException('Stadium service undefined');
    if (!this.updatedStadiumCapacityEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.stadiumService.updateStadiumCapacity(capacity);
    this.updatedStadiumCapacityEventPublisher.response = result;
    this.updatedStadiumCapacityEventPublisher.publish();
    return result;
  }
  async updateStadiumSquareMeters(
    squareMeters: IUpdateStadiumSquareMeters,
  ): Promise<StadiumDomainEntity> {
    if (!this.stadiumService)
      throw new AggregateRootException('Stadium service undefined');
    if (!this.updatedStadiumSquareMetersEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.stadiumService.updateStadiumSquareMeters(squareMeters);
    this.updatedStadiumSquareMetersEventPublisher.response = result;
    this.updatedStadiumSquareMetersEventPublisher.publish();
    return result;
  }
  async updateRivalTown(
    town: IUpdateRivalTownCommand,
  ): Promise<RivalDomainEntity> {
    if (!this.rivalService)
      throw new AggregateRootException('Rival service undefined');
    if (!this.updatedRivalTownEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.rivalService.updateRivalTown(town);
    this.updatedRivalTownEventPublisher.response = result;
    this.updatedRivalTownEventPublisher.publish();
    return result;
  }
  async updateDate(date: IUpdateDateCommand): Promise<MatchDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.updatedDateEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.updateDate(date);
    this.updatedDateEventPublisher.response = result;
    this.updatedDateEventPublisher.publish();
    return result;
  }
}
