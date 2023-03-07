import { CoachDomainEntity, PlayerDomainEntity } from "../entities";
import { IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand } from "../interfaces";
import { PositionValueObject, WageValueObject } from "../value-objects";

export interface IPlayerDomainService {
    updateWage(wage: IUpdatePlayerWageCommand): Promise<PlayerDomainEntity | null>;
    updatePosition(position: IUpdatePlayerPositionCommand): Promise<PlayerDomainEntity | null>;
}