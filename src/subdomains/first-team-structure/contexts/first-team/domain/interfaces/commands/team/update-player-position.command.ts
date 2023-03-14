import { PositionEnum, PositionValueObject } from "../../../value-objects";


export interface IUpdatePlayerPositionCommand {
    playerId: string,
    position: PositionEnum | PositionValueObject
}