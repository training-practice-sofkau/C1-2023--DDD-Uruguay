import { WageValueObject } from "../../../value-objects";

export interface IUpdateCoachWageCommand {
    coachId: string,
    wage: number | WageValueObject
}