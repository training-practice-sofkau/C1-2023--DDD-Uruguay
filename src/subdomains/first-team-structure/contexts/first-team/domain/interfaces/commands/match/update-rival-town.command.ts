import { TownValueObject } from "../../../value-objects";

export interface IUpdateRivalTownCommand {
    rivalId: string,
    town: string | TownValueObject
}