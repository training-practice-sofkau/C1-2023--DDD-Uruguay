import { PosterMySqlEntity } from "../../infrastructure"
import { ICounterCreateCounterCommand, ICounterCreatePosterCommand, ICounterCreateProductCommand } from "../interfaces"
import { CounterMySqlEntity } from '../../infrastructure/persistence/databases/mysql/entities/counter.entity';
import { ProductMySqlEntity } from '../../infrastructure/persistence/databases/mysql/entities/product.entity';

export interface ICounterDomainService<T extends CounterMySqlEntity = CounterMySqlEntity> {
    createCounter(counter: ICounterCreateCounterCommand): Promise<T>
    createPoster(poster: ICounterCreatePosterCommand): Promise<PosterMySqlEntity>
    createProduct(poster: ICounterCreateProductCommand): Promise<ProductMySqlEntity>
    turnOffFreezer(counterId: string, turnOff: boolean): Promise<boolean>
    turnOnFreezer(counterId: string, turnOff: boolean): Promise<boolean>
    getPoster(posterId: string): Promise<PosterMySqlEntity>
    getProduct(productId: string): Promise<ProductMySqlEntity>
}