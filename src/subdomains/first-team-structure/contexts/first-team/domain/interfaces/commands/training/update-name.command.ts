import { NameValueObject } from "../../../value-objects";

export interface IUpdateNameCommand {
    trainingId: string,
    name: string | NameValueObject
}