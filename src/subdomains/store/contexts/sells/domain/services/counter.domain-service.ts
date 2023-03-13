import { CounterDomainEntity, PosterDomainEntity, ProductDomainEntity } from "../entities"
import { ICounterCreateCounterCommand, ICounterCreatePosterCommand, ICounterCreateProductCommand } from "../interfaces"

export interface ICounterDomainService {
    createCounter(counter: ICounterCreateCounterCommand): Promise<CounterDomainEntity>
    createPoster(poster: ICounterCreatePosterCommand): Promise<PosterDomainEntity>
    createProduct(poster: ICounterCreateProductCommand): Promise<ProductDomainEntity>
    turnOffFreezer(counterId: string, turnOff: boolean): Promise<boolean>
    turnOnFreezer(counterId: string, turnOff: boolean): Promise<boolean>
    getPoster(posterId: string): Promise<PosterDomainEntity>
    getProduct(productId: string): Promise<ProductDomainEntity>
}