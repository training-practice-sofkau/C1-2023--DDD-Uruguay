import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

export interface IAddRivalCommand {
    rivalId: string | IdValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}