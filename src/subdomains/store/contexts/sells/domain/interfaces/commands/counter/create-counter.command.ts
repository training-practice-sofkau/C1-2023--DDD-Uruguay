import { IPosterDomainEntity, IProductDomainEntity } from "../../../entities";
import { IdValueObject } from "../../../value-objects";

export interface ICounterCreateCounterCommand{
    counterId: string
    product: IProductDomainEntity
    poster: IPosterDomainEntity
}