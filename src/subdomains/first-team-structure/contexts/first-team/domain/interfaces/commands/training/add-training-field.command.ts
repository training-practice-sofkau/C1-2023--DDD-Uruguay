import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

export interface IAddTrainingFieldCommand {
    trainingFieldId: string | IdValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}