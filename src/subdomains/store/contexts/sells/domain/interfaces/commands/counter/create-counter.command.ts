import { IPosterDomainEntity, IProductDomainEntity } from "../../../entities";
import { IdValueObject } from "../../../value-objects";

export interface ICounterCreateCounterCommand{
    counterId: string | IdValueObject
    product: IProductDomainEntity
    poster: IPosterDomainEntity
}