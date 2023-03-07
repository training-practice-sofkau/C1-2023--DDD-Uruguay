import { AgeValueObject, CountryValueObject, FullNameValueObject, IdValueObject, PositionValueObject, WageValueObject } from "../../../value-objects";
import { PositionEnum } from "../../../value-objects/team/player/position/positions.enum";

export interface IAddPlayerCommand {
    playerId: string | IdValueObject,
    age: number | AgeValueObject,
    wage: number | WageValueObject,
    position: PositionEnum | PositionValueObject, 
    fullName: string | FullNameValueObject,
    country: string | CountryValueObject
}