import { MatchDomainEntity, RivalDomainEntity, StadiumDomainEntity } from "../entities";
import { IAddRivalCommand, IAddStadiumCommand, IRegisterMatchCommand, IUpdateDateCommand, IUpdateRivalTownCommand, IUpdateStadiumCapacity, IUpdateStadiumSquareMeters } from "../interfaces";
import { CapacityValueObject, DateValueObject, SquareMetersValueObject, TownValueObject } from "../value-objects";

export interface IMatchDomainService {
    registerMatch(match: IRegisterMatchCommand): Promise<MatchDomainEntity | null>;
    addRival(rival: IAddRivalCommand): Promise<RivalDomainEntity | null>;
    addStadium(stadium: IAddStadiumCommand): Promise<StadiumDomainEntity | null>;
    updateStadiumCapacity(capacity: IUpdateStadiumCapacity): Promise<StadiumDomainEntity | null>;
    updateStadiumSquareMeters(squareMeters: IUpdateStadiumSquareMeters): Promise<StadiumDomainEntity | null>;
    updateRivalTown(town: IUpdateRivalTownCommand): Promise<RivalDomainEntity | null>;
    updateDate(date: IUpdateDateCommand): Promise<MatchDomainEntity | null>;
    // getRivalId(id: string): Promise<IdValueObject | null>;
    // getMatchId(id: string): Promise<IdValueObject | null>;
    // getStadiumId(id: string): Promise<IdValueObject | null>;
}