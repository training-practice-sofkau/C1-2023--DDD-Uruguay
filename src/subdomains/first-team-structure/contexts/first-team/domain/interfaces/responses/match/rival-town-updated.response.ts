import { TownValueObject } from "../../../value-objects";

export interface IUpdatedRivalTownResponse {
    success: boolean;
    data: TownValueObject | null;
}