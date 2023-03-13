import { IdValueObject, CapacityValueObject, SquareMetersValueObject, NameValueObject, TownValueObject } from "../../value-objects";
import { IStadiumDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Stadium Entity of Match AR
 *
 * @export
 * @class StadiumDomainEntity
 * @implements {IStadiumDomainEntity}
 */
export class StadiumDomainEntity implements IStadiumDomainEntity{
    stadiumId?: string | IdValueObject;
    capacity: number | CapacityValueObject;
    squareMeters: number | SquareMetersValueObject;
    name: string | NameValueObject;
    town: string | TownValueObject;

    constructor(data: IStadiumDomainEntity) {
        if(data.stadiumId) this.stadiumId = data.stadiumId
        else this.stadiumId = uuidv4();

        if(data.capacity) this.capacity = data.capacity

        if(data.squareMeters) this.squareMeters = data.squareMeters

        if(data.name) this.name = data.name

        if(data.town) this.town = data.town
    }
}
