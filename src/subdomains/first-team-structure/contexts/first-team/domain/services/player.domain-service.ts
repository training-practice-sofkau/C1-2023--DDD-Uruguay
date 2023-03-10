import { PlayerDomainEntity } from "../entities";
import { IUpdatePlayerPositionCommand, IUpdatePlayerWageCommand } from "../interfaces";

export interface IPlayerDomainService {
    getPlayers(id: string[]): Promise<PlayerDomainEntity[] | null>;
    updatePlayerWage(wage: IUpdatePlayerWageCommand): Promise<PlayerDomainEntity | null>;
    updatePlayerPosition(position: IUpdatePlayerPositionCommand): Promise<PlayerDomainEntity | null>;
}