import { IdValueObject, TownValueObject } from "../../../value-objects";

export interface IUpdateRivalTownCommand {
    rivalId: string | IdValueObject
    town: string | TownValueObject
}