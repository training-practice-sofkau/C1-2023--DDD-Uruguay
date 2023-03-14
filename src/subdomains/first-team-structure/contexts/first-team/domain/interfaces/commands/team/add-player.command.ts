import { PositionEnum } from "../../../value-objects";


export interface IAddPlayerCommand {
    teamId: string,
    playerId: string,
    age: number,
    wage: number,
    position: PositionEnum, 
    fullName: string,
    country: string
}