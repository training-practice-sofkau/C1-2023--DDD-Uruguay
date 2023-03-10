import { CounterDomainEntity, PosterDomainEntity, ProductDomainEntity } from "../entities";
import { CounterCreatedCounterEventPublisherBase, CounterCreatedPosterEventPublisherBase, CounterCreatedProductEventPublisherBase, CounterTurnedOffFreezerEventPublisherBase, PosterUpdatedPriceEventPublisherBase } from "../events";
import { ICounterCreateCounterCommand, ICounterCreatePosterCommand, ICounterCreateProductCommand, IPosterUpdateImageCommand, IProductUpdatePriceCommand, IProductUpdateStockCommand } from "../interfaces";
import { ICounterDomainService, IPosterDomainService, IProductDomainService } from "../services";
import { AggregateRootException } from '../../../../../../libs/sofka/exceptions/aggregate-root.exception';
import { IPosterUpdatePriceCommand } from '../interfaces/commands/counter/poster/update-price.command';
import { PosterUpdatedImageEventPublisherBase } from '../events/publishers/counter/poster/updated-image.event-publisher';
import { ProductUpdatedPriceEventPublisherBase } from '../events/publishers/counter/product/updated-price.event-publisher';
import { ProductUpdatedStockEventPublisherBase } from '../events/publishers/counter/product/updated-stock.event-publisher';
import { CounterTurnedOnFreezerEventPublisherBase } from '../events/publishers/counter/turednon-freezer.event-publisher';

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
    
    //product
    private readonly productUpdatedPriceEventPublisherBase?: ProductUpdatedPriceEventPublisherBase
    private readonly productUpdatedStockEventPublisherBase?: ProductUpdatedStockEventPublisherBase

    //freezer
    private readonly counterTurnedOffFreezerEventPublisherBase?: CounterTurnedOffFreezerEventPublisherBase
    private readonly counterTurnedOnFreezerEventPublisherBase?: CounterTurnedOnFreezerEventPublisherBase

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
            posterUpdatedPriceEventPublisherBase,

            //product
            productUpdatedPriceEventPublisherBase,
            productUpdatedStockEventPublisherBase,

            //freezer
            counterTurnedOffFreezerEventPublisherBase,
            counterTurnedOnFreezerEventPublisherBase
        }: {
            counterService?: ICounterDomainService,
            posterService?: IPosterDomainService,
            productService?: IProductDomainService,

            counterCreatedCounterEventPublisherBase?: CounterCreatedCounterEventPublisherBase,
            counterCreatedPosterEventPublisherBase?: CounterCreatedPosterEventPublisherBase,
            counterCreatedProductEventPublisherBase?: CounterCreatedProductEventPublisherBase,

            //poster
            posterUpdatedImageEventPublisherBase?: PosterUpdatedImageEventPublisherBase,
            posterUpdatedPriceEventPublisherBase?: PosterUpdatedPriceEventPublisherBase,

            //product
            productUpdatedPriceEventPublisherBase?: ProductUpdatedPriceEventPublisherBase,
            productUpdatedStockEventPublisherBase?: ProductUpdatedStockEventPublisherBase,

            //freezer
            counterTurnedOffFreezerEventPublisherBase?: CounterTurnedOffFreezerEventPublisherBase,
            counterTurnedOnFreezerEventPublisherBase?: CounterTurnedOnFreezerEventPublisherBase
        }
    ) {
        this.counterService = counterService,
            this.counterCreatedCounterEventPublisherBase = counterCreatedCounterEventPublisherBase,
            this.counterCreatedPosterEventPublisherBase = counterCreatedPosterEventPublisherBase,
            this.counterCreatedProductEventPublisherBase = counterCreatedProductEventPublisherBase,

            //poster
            this.posterUpdatedImageEventPublisherBase = posterUpdatedImageEventPublisherBase,
            this.posterUpdatedPriceEventPublisherBase = posterUpdatedPriceEventPublisherBase,
            
            //product
            this.productUpdatedPriceEventPublisherBase = productUpdatedPriceEventPublisherBase,
            this.productUpdatedStockEventPublisherBase = productUpdatedStockEventPublisherBase,

            //freezer
            this.counterTurnedOffFreezerEventPublisherBase = counterTurnedOffFreezerEventPublisherBase,
            this.counterTurnedOnFreezerEventPublisherBase = counterTurnedOnFreezerEventPublisherBase
    }


    /**
     * Product Methods
     *
     * @param {IProductDomainEntity} product
     * @param {number} newStock
     * @return {*}  {ProductDomainEntity}
     * @memberof CounterAggregate
     */
    async updateStock(product: IProductUpdateStockCommand): Promise<ProductDomainEntity> {
        if (!this.productService) throw new AggregateRootException("Product service not found")
        if (!this.productUpdatedStockEventPublisherBase) throw new AggregateRootException("PRODUCT Update stock event not found")
    
        const stockResult = await this.productService.updateStock(product)
        this.productUpdatedStockEventPublisherBase.response = stockResult
        this.productUpdatedStockEventPublisherBase.publish()
        return stockResult
    }
    async updateProductPrice(product: IProductUpdatePriceCommand): Promise<ProductDomainEntity> {
        if (!this.productService) throw new AggregateRootException("Product service not found")
        if (!this.productUpdatedPriceEventPublisherBase) throw new AggregateRootException("Updated Price event not found")
    
        const priceResult = await this.productService.updateProductPrice(product)
        this.productUpdatedPriceEventPublisherBase.response = priceResult
        this.productUpdatedPriceEventPublisherBase.publish()
        return priceResult
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

    async createProduct(product: ICounterCreateProductCommand): Promise<ProductDomainEntity> {
        if (!this.counterService) throw new AggregateRootException("Service not found")
        if (!this.counterCreatedProductEventPublisherBase) throw new AggregateRootException("Create product event not found")

        const productCreated = await this.counterService.createProduct(product)
        this.counterCreatedProductEventPublisherBase.response = productCreated
        this.counterCreatedProductEventPublisherBase.publish()
        return productCreated
    }
    
    async turnOffFreezer(counterId: string, turnOff: boolean): Promise<boolean> {
        if (!this.counterService) throw new AggregateRootException("CounterService not found")
        if (!this.counterTurnedOffFreezerEventPublisherBase) throw new AggregateRootException("Turned Off freezer event not found")

        const turnedOff = await this.counterService.turnOffFreezer(counterId, turnOff)
        this.counterTurnedOffFreezerEventPublisherBase.response = turnedOff
        this.counterTurnedOffFreezerEventPublisherBase.publish()
        return turnedOff
    }

    async turnOnFreezer(counterId: string, turnOn: boolean): Promise<boolean> {
        if (!this.counterService) throw new AggregateRootException("CounterService not found")
        if (!this.counterTurnedOffFreezerEventPublisherBase) throw new AggregateRootException("Turned On freezer event not found")

        const turnedOn = await this.counterService.turnOnFreezer(counterId, turnOn)
        this.counterTurnedOnFreezerEventPublisherBase.response = turnedOn
        this.counterTurnedOnFreezerEventPublisherBase.publish()
        return turnedOn
    }
}