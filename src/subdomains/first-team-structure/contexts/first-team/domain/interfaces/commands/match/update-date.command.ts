import { DateValueObject, IdValueObject } from "../../../value-objects";

export interface IUpdateDateCommand {
    matchId: string | IdValueObject
    date: Date | DateValueObject
}