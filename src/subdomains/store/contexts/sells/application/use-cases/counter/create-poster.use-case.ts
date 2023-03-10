import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import {
    CounterAggregate,
    CounterCreatedPosterEventPublisherBase,
    DateValueObject,
    FlavourValueObject,
    ICounterCreatePosterCommand,
    ICounterPosterCreatedResponse,
    IdValueObject,
    ImageValueObject,
    IPosterDomainEntity,
    IPosterDomainService,
    PosterDomainEntity,
    PosterTypeValueObject,
    PriceValueObject,
    StockValueObject
} from "../../../domain";

export class CreatePosterUseCase<
    Command extends ICounterCreatePosterCommand = ICounterCreatePosterCommand,
    Response extends ICounterPosterCreatedResponse = ICounterPosterCreatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot: CounterAggregate

    constructor(
        private readonly posterService: IPosterDomainService,
        private readonly counterCreatedPosterEventPublisherBase: CounterCreatedPosterEventPublisherBase
    ) {
        super();
        this.counterAggregateRoot = new CounterAggregate({
            posterService,
            counterCreatedPosterEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command)
        return { success: data ? true : false, data } as unknown as Response
    }

    executeCommand(command: Command): Promise<PosterDomainEntity | null> {
        const valueObject = this.createValueObject(command)
        this.validateValueObject(valueObject)
        const poster = this.createEntityPosterDomain(valueObject)
        return this.executePosterAggregateRoot(valueObject)
    }

    createValueObject(command: Command): IPosterDomainEntity {
        const posterId = new IdValueObject(command.posterId)
        const type = new PosterTypeValueObject(command.type)
        const flavour = new FlavourValueObject(command.flavour)
        const price = new PriceValueObject(command.price)
        const stock = new StockValueObject(command.stock)
        const image = new ImageValueObject(command.image)

        return {
            posterId,
            type,
            flavour,
            price,
            stock,
            image
        }
    }

    validateValueObject(valueObject: IPosterDomainEntity): void {
        const {
            posterId,
            type,
            flavour,
            price,
            stock,
            image
        } = valueObject

        if (posterId instanceof IdValueObject && posterId.hasErrors())
            this.setErrors(posterId.getErrors())
        if (type instanceof PosterTypeValueObject && type.hasErrors())
            this.setErrors(type.getErrors())
        if (flavour instanceof FlavourValueObject && flavour.hasErrors())
            this.setErrors(flavour.getErrors())
        if (price instanceof PriceValueObject && price.hasErrors())
            this.setErrors(price.getErrors())
        if (stock instanceof StockValueObject && stock.hasErrors())
            this.setErrors(stock.getErrors())
        if (image instanceof DateValueObject && image.hasErrors())
            this.setErrors(image.getErrors())

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay errres en validateValueObject',
                this.getErrors()
            )
    }

    createEntityPosterDomain(
        valueObject: IPosterDomainEntity
    ): PosterDomainEntity {
        const {
            type,
            flavour,
            price,
            image
        } = valueObject
        return new PosterDomainEntity({
            type: type,
            flavour: flavour,
            price: price.valueOf(),
            image: image
        })
    }

    private executePosterAggregateRoot(
        entity: PosterDomainEntity,
    ): Promise<PosterDomainEntity | null> {
        return this.counterAggregateRoot.createPoster(entity as ICounterCreatePosterCommand)
    }
}