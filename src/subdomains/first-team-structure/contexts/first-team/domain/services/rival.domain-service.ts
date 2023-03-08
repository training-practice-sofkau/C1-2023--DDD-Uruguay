import { TownValueObject } from "../value-objects";
import { RivalDomainEntity } from '../entities/match/rival.domain-entity';
import { IUpdateRivalTownCommand } from "../interfaces";

export interface IRivalDomainService {
    updateTown(town: IUpdateRivalTownCommand): Promise<RivalDomainEntity | null>;
}