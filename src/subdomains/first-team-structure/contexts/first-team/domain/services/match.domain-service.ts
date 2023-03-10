import { IMatchDomainEntity, IRivalDomainEntity, IStadiumDomainEntity, MatchDomainEntity, RivalDomainEntity, StadiumDomainEntity, TeamDomainEntity } from "../entities";
import { IUpdateDateCommand } from "../interfaces";

export interface IMatchDomainService {
    registerMatch(match: IMatchDomainEntity): Promise<MatchDomainEntity | null>;
    addRival(rival: IRivalDomainEntity): Promise<RivalDomainEntity | null>;
    addStadium(stadium: IStadiumDomainEntity): Promise<StadiumDomainEntity | null>;
    // updateStadiumCapacity(capacity: IUpdateStadiumCapacity): Promise<StadiumDomainEntity | null>;
    // updateStadiumSquareMeters(squareMeters: IUpdateStadiumSquareMeters): Promise<StadiumDomainEntity | null>;
    // updateRivalTown(town: IUpdateRivalTownCommand): Promise<RivalDomainEntity | null>;
    updateDate(date: IUpdateDateCommand): Promise<MatchDomainEntity | null>;
    // getRivalId(id: string): Promise<IdValueObject | null>;
    getTeam(id: string): Promise<TeamDomainEntity | null>;
    getMatch(id: string): Promise<MatchDomainEntity | null>;
    // getStadiumId(id: string): Promise<IdValueObject | null>;
}