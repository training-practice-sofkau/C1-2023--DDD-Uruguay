import { CounterDomainEntity, PosterDomainEntity, ProductDomainEntity } from "../entities"

export interface ICounterDomainService {
    createCounter(counter: CounterDomainEntity): Promise<CounterDomainEntity>
    createPoster(poster: PosterDomainEntity): Promise<PosterDomainEntity>
    createProduct(poster: ProductDomainEntity): Promise<ProductDomainEntity>
    turnOffFreezer(counterId: string, turnOff: boolean): Promise<boolean>
    turnOnFreezer(counterId: string, turnOff: boolean): Promise<boolean>
}