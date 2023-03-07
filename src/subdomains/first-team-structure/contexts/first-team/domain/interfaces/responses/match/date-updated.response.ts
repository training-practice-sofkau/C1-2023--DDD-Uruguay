import { DateValueObject } from "../../../value-objects";

export interface IUpdatedDateResponse {
    success: boolean;
    data: DateValueObject | null;
}