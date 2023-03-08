import {
  MatchDomainEntity,
  RivalDomainEntity,
  StadiumDomainEntity,
} from '../entities';
import {
  CapacityValueObject,
  SquareMetersValueObject,
  TownValueObject,
  DateValueObject,
  IdValueObject,
} from '../value-objects';
import {
  AddedRivalEventPublisher,
  AddedStadiumEventPublisher,
  RegisteredMatchEventPublisher,
  UpdatedDateEventPublisher,
  UpdatedRivalTownEventPublisher,
  UpdatedStadiumCapacityEventPublisher,
  UpdatedStadiumSquareMetersEventPublisher,
} from '../events';
import {
  IMatchDomainService,
  IRivalDomainService,
  IStadiumDomainService,
} from '../services';
import { AggregateRootException } from 'src/libs';
import { IAddRivalCommand, IAddStadiumCommand, IRegisterMatchCommand, IUpdateDateCommand, IUpdateRivalTownCommand, IUpdateStadiumCapacity, IUpdateStadiumSquareMeters } from '../interfaces';

export class MatchAggregate implements IMatchDomainService {
  constructor(
    private readonly matchService?: IMatchDomainService,
    private readonly rivalService?: IRivalDomainService,
    private readonly stadiumService?: IStadiumDomainService,
    private readonly registeredMatchEventPublisher?: RegisteredMatchEventPublisher,
    private readonly addedRivalEventPublisher?: AddedRivalEventPublisher,
    private readonly addedStadiumEventPublisher?: AddedStadiumEventPublisher,
    private readonly updatedStadiumCapacityEventPublisher?: UpdatedStadiumCapacityEventPublisher,
    private readonly updatedStadiumSquareMetersEventPublisher?: UpdatedStadiumSquareMetersEventPublisher,
    private readonly updatedRivalTownEventPublisher?: UpdatedRivalTownEventPublisher,
    private readonly updatedDateEventPublisher?: UpdatedDateEventPublisher,
  ) {}
  async registerMatch(match: IRegisterMatchCommand): Promise<MatchDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.registeredMatchEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.registerMatch(match);
    this.registeredMatchEventPublisher.response = result;
    this.registeredMatchEventPublisher.publish();
    return result;
  }
  async addRival(rival: IAddRivalCommand): Promise<RivalDomainEntity> {
    if (!this.matchService)
      throw new AggregateRootException('Match service undefined');
    if (!this.addedRivalEventPublisher)
      throw new AggregateRootException('Event Publisher undefined');

    const result = await this.matchService.addRival(rival);
    this.addedRivalEventPublisher.response = result;
    this.addedRivalEventPublisher.publish();
    return result;
  }
  async addStadium(stadium: IAddStadiumCommand): Promise<StadiumDomainEntity> {
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

    const result = await this.stadiumService.updateCapacity(capacity);
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

    const result = await this.stadiumService.updateSquareMeters(squareMeters);
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

    const result = await this.rivalService.updateTown(town);
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
