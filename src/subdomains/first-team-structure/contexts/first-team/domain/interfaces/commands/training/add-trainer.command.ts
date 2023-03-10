import { FullNameValueObject } from "../../../value-objects";

export interface IAddTrainerCommand {
    trainerId: string,
    fullName: string | FullNameValueObject,
    age: number,
    country: string,
    specialty: string
}