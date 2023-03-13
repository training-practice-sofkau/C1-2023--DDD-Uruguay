import { PositionEnum } from "../../../value-objects/team/player/position/positions.enum";

export interface IAddPlayerCommand {
    playerId: string,
    age: number,
    wage: number,
    position: PositionEnum, 
    fullName: string,
    country: string
}