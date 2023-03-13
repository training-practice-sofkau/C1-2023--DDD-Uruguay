import { RivalDomainEntity } from '../entities/match/rival.domain-entity';
import { IUpdateRivalTownCommand } from "../interfaces";

export interface IRivalDomainService {
    getRival(id: string): Promise<RivalDomainEntity | null>;
    updateRivalTown(town: IUpdateRivalTownCommand): Promise<RivalDomainEntity | null>;
}