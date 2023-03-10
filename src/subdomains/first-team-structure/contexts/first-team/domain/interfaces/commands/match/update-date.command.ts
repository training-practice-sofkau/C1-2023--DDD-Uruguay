import { DateValueObject } from "../../../value-objects";

export interface IUpdateDateCommand {
    matchId: string,
    date: Date | DateValueObject
}