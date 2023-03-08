import { IdValueObject, NameValueObject } from "../../../value-objects";

export interface IUpdateNameCommand {
    trainingId: string | IdValueObject
    name: string | NameValueObject
}