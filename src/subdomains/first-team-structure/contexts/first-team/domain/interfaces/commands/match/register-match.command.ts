import { DateValueObject, IdValueObject, ScoreValueObject } from "../../../value-objects";

export interface IRegisterMatchCommand {
    matchId?: string,
    teamId: string,
    score: string,
    rivalId: string,
    stadiumId: string,
    date: Date
}