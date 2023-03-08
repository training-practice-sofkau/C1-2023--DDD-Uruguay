import { CounterDomainEntity, PosterDomainEntity, IProductDomainEntity, ProductDomainEntity } from "../entities";
import { CounterCreatedCounterEventPublisherBase, CounterCreatedPosterEventPublisherBase, CounterCreatedProductEventPublisherBase, PosterUpdatedPriceEventPublisherBase } from "../events";
import { ICounterCreateCounterCommand, ICounterCreatePosterCommand, ICounterCreateProductCommand, IPosterUpdateImageCommand, IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces";
import { ICounterDomainService, IPosterDomainService, IProductDomainService } from "../services";
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { IPosterUpdatePriceCommand } from '../interfaces/commands/counter/poster/update-price.command';
import { PosterUpdatedImageEventPublisherBase } from '../events/publishers/counter/poster/updated-image.event-publisher';

export class CounterAggregate implements
    ICounterDomainService,
    IPosterDomainService,
    IProductDomainService {

    private readonly counterService?: ICounterDomainService
    private readonly posterService?: IPosterDomainService
    private readonly productService?: IProductDomainService

    private readonly counterCreatedCounterEventPublisherBase?: CounterCreatedCounterEventPublisherBase
    private readonly counterCreatedPosterEventPublisherBase?: CounterCreatedPosterEventPublisherBase
    private readonly counterCreatedProductEventPublisherBase?: CounterCreatedProductEventPublisherBase

    //poster
    private readonly posterUpdatedImageEventPublisherBase?: PosterUpdatedImageEventPublisherBase
    private readonly posterUpdatedPriceEventPublisherBase?: PosterUpdatedPriceEventPublisherBase

    constructor(
        {
            counterService,
            posterService,
            productService,

            counterCreatedCounterEventPublisherBase,
            counterCreatedPosterEventPublisherBase,
            counterCreatedProductEventPublisherBase,

            //poster
            posterUpdatedImageEventPublisherBase,
            posterUpdatedPriceEventPublisherBase
        }: {
            counterService?: ICounterDomainService,
            posterService?: IPosterDomainService,
            productService?: IProductDomainService,

            counterCreatedCounterEventPublisherBase?: CounterCreatedCounterEventPublisherBase,
            counterCreatedPosterEventPublisherBase?: CounterCreatedPosterEventPublisherBase,
            counterCreatedProductEventPublisherBase?: CounterCreatedProductEventPublisherBase,

            //poster
            posterUpdatedImageEventPublisherBase?: PosterUpdatedImageEventPublisherBase
            posterUpdatedPriceEventPublisherBase?: PosterUpdatedPriceEventPublisherBase
        }
    ) {
        this.counterService = counterService,
            this.counterCreatedCounterEventPublisherBase = counterCreatedCounterEventPublisherBase,
            this.counterCreatedPosterEventPublisherBase = counterCreatedPosterEventPublisherBase,
            this.counterCreatedProductEventPublisherBase = counterCreatedProductEventPublisherBase,

            //poster
            this.posterUpdatedImageEventPublisherBase = posterUpdatedImageEventPublisherBase,
            this.posterUpdatedImageEventPublisherBase = posterUpdatedImageEventPublisherBase
    }


    /**
     * Product Methods
     *
     * @param {IProductDomainEntity} product
     * @param {number} newStock
     * @return {*}  {ProductDomainEntity}
     * @memberof CounterAggregate
     */
    updateStock(product: IProductUpdateStockCommand): ProductDomainEntity {
        throw new Error("Method not implemented.");
    }
    updateProductPrice(product: IProductUpdatePriceCommand): ProductDomainEntity {
        throw new Error("Method not implemented.");
    }

    /**
     * Poster Methods
     *
     * @param {IPosterDomainEntity} poster
     * @param {string} newImage
     * @return {*}  {PosterDomainEntity}
     * @memberof CounterAggregate
     */
    async updateImage(poster: IPosterUpdateImageCommand, newImage: string): Promise<PosterDomainEntity> {
        if (!this.posterService) throw new AggregateRootException("Service not found.")
        if (!this.posterUpdatedImageEventPublisherBase) throw new AggregateRootException("Event not found.")

        const imageResult = await this.posterService.updateImage(poster, newImage)
        this.posterUpdatedImageEventPublisherBase.response = imageResult
        this.posterUpdatedImageEventPublisherBase.publish()
        return imageResult
    }

    async updatePosterPrice(poster: IPosterUpdatePriceCommand, newPrice: number): Promise<PosterDomainEntity> {
        if (!this.posterService) throw new AggregateRootException("Service not found.")
        if (!this.posterUpdatedPriceEventPublisherBase) throw new AggregateRootException("Event not found.")

        const posterResult = await this.posterService.updatePosterPrice(poster, newPrice)
        this.posterUpdatedPriceEventPublisherBase.response = posterResult
        this.posterUpdatedPriceEventPublisherBase.publish()
        return posterResult
    }

    /**
     * Counter Methods
     *
     * @param {ICounterDomainEntity} counter
     * @return {*}  {Promise<CounterDomainEntity>}
     * @memberof CounterAggregate
     */
    async createCounter(counter: ICounterCreateCounterCommand): Promise<CounterDomainEntity> {
        if (!this.counterService) throw new AggregateRootException("Service not found.")
        if (!this.counterCreatedCounterEventPublisherBase) throw new AggregateRootException("Event not found.")

        const counterResult = await this.counterService.createCounter(counter)
        this.counterCreatedCounterEventPublisherBase.response = counterResult
        this.counterCreatedCounterEventPublisherBase.publish()
        return counterResult
    }

    async createPoster(poster: ICounterCreatePosterCommand): Promise<PosterDomainEntity> {
        if (!this.counterService) throw new AggregateRootException("Service not found.")
        if (!this.counterCreatedPosterEventPublisherBase) throw new AggregateRootException("Event not found.")

        const posterResult = await this.counterService.createPoster(poster)
        this.counterCreatedPosterEventPublisherBase.response = posterResult
        this.counterCreatedPosterEventPublisherBase.publish()
        return posterResult
    }

    async createProduct(poster: ICounterCreateProductCommand): Promise<ProductDomainEntity> {
        throw new Error("Method not implemented.");
    }
    async turnOffFreezer(counterId: string, turnOff: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async turnOnFreezer(counterId: string, turnOff: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}