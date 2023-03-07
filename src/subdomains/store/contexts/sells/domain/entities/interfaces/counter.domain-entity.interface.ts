import { IdValueObject } from "../../value-objects";
import { IPosterDomainEntity } from "./poster.domain-entity.interface";
import { IProductDomainEntity } from "./product.domain-entity.interface";

export interface ICounterDomainEntity {
    counterId: string | IdValueObject
    product: IProductDomainEntity
    poster: IPosterDomainEntity
}