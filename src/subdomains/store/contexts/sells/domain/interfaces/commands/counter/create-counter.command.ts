import { IPosterDomainEntity, IProductDomainEntity } from "../../../entities";

export interface ICounterCreateCounterCommand{
    counterId: string
    productId: string
    posterId: string
}