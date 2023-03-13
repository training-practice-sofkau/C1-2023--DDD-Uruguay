import { PositionValueObject } from "../../../value-objects";
import { PositionEnum } from "../../../value-objects/team/player/position/positions.enum";

export interface IUpdatePlayerPositionCommand {
    playerId: string,
    position: PositionEnum | PositionValueObject
}