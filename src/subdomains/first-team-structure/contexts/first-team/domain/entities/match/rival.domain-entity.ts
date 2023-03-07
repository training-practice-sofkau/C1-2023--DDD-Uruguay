import { IdValueObject, NameValueObject, TownValueObject } from "../../value-objects";
import { IRivalDomainEntity } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

/**
 *Rival Entity of Match AR
 *
 * @export
 * @class RivalDomainEntity
 * @implements {IRivalDomainEntity}
 */
export class RivalDomainEntity implements IRivalDomainEntity{
    rivalId: string | IdValueObject;
    name: string | NameValueObject;
    town: string | TownValueObject;

    constructor(data: IRivalDomainEntity) {
        if(data.rivalId) this.rivalId = data.rivalId
        else this.rivalId = uuidv4();

        if(data.name) this.name = data.name

        if(data.town) this.town = data.town
    }
}
