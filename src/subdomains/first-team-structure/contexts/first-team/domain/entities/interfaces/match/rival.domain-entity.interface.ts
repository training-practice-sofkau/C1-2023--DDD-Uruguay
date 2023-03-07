import { IdValueObject, NameValueObject, TownValueObject } from "../../../value-objects";

/**
 *Rival Interface Entity of Match AR
 *
 * @export
 * @interface IRivalDomainEntity
 */
export interface IRivalDomainEntity {
    rivalId: string | IdValueObject,
    name: string | NameValueObject,
    town: string | TownValueObject
}
