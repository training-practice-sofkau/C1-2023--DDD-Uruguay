import { WageValueObject } from "../../../value-objects";

export interface IUpdatePlayerWageCommand {
    playerId: string,
    wage: number | WageValueObject
}