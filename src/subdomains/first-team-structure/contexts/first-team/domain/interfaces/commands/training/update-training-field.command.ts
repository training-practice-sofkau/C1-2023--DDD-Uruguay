import { IdValueObject, NameValueObject } from "../../../value-objects";

export interface IUpdateTrainingFieldNameCommand {
    trainingFieldId: string | IdValueObject
    name: string | NameValueObject
}