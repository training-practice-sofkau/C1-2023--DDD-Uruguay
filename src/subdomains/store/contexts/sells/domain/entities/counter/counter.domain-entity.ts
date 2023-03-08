import { IdValueObject } from "../../value-objects";
import { ICounterDomainEntity } from "../interfaces/counter.domain-entity.interface";
import { v4 as uuid } from 'uuid';
import { ProductDomainEntity } from "../product";
import { PosterDomainEntity } from "../poster";

export class CounterDomainEntity implements ICounterDomainEntity{
    
    counterId: string | IdValueObject;
    product: ProductDomainEntity;
    poster: PosterDomainEntity;

    constructor(data?: ICounterDomainEntity) {
        if (data.counterId) this.counterId = data.counterId
        else this.counterId = uuid()
        if (data.poster) this.poster = data.poster
        if (data.product) this.product = data.product
    }
}
