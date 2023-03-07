import { IdValueObject, WageValueObject } from "../../../value-objects";

export interface IUpdatePlayerWageCommand {
    playerId: string | IdValueObject
    wage: number | WageValueObject
}