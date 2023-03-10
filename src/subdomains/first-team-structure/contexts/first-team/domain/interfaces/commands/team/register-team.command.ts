import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

export interface IRegisterTeamCommand {
    teamId: string,
    coachId: string,
    playersIds: Array<string>,
    name: string,
    town: string
}