import { DurationValueObject, IdValueObject } from "../../../value-objects";

export interface IUpdateDurationCommand {
    trainingId: string | IdValueObject
    duration: number | DurationValueObject
}