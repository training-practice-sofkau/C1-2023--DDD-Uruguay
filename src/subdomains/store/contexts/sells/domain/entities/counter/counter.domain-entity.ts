import { IdValueObject } from "../../value-objects";
import { IProductDomainEntity, IPosterDomainEntity } from "../interfaces";
import { ICounterDomainEntity } from "../interfaces/counter.domain-entity.interface";
import { v4 as uuid } from 'uuid';

export class CounterDomainEntity implements ICounterDomainEntity{
    counterId: string | IdValueObject;
    product: IProductDomainEntity;
    poster: IPosterDomainEntity;

    constructor(data?: ICounterDomainEntity) {
        if (data.counterId) this.counterId = data.counterId
        else this.counterId = uuid()
        if (data.poster) this.poster = data.poster
        if (data.product) this.product = data.product
    }
}
