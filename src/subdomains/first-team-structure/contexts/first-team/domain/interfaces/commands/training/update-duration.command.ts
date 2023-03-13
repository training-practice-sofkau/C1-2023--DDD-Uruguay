import { DurationValueObject } from "../../../value-objects";

export interface IUpdateDurationCommand {
    trainingId: string,
    duration: number | DurationValueObject
}