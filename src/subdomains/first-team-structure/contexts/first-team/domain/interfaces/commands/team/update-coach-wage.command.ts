import { IdValueObject, WageValueObject } from "../../../value-objects";

export interface IUpdateCoachWageCommand {
    coachId: string | IdValueObject
    wage: number | WageValueObject
}