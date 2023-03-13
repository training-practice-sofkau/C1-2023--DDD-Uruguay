import { NameValueObject } from "../../../value-objects";

export interface IUpdateTrainingFieldNameCommand {
    trainingFieldId: string,
    name: string | NameValueObject
}