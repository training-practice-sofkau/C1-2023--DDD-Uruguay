import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { CounterAggregate, IClientDomainEntity, ICounterCounterCreatedResponse, ICounterCreateCounterCommand, IdValueObject } from "../../../domain";
import { ICounterDomainService } from '../../../domain/services/counter.domain-service';
import { CounterCreatedProductEventPublisherBase } from '../../../domain/events/publishers/counter/created-product.event-publisher';
import { CounterDomainEntity } from '../../../domain/entities/counter/counter.domain-entity';
import { ICounterDomainEntity } from '../../../domain/entities/interfaces/counter.domain-entity.interface';
import { CreateProductUseCase } from "./create-product.use-case";
import { GetProductUseCase } from "./get-product.use-case";
import { GetPosterUseCase } from "./get-poster.use-case";
import { GettedPosterEventPublisherBase } from '../../../domain/events/publishers/counter/getted-poster.event-publisher';
import { GettedProductEventPublisherBase } from '../../../domain/events/publishers/counter/getted-product.event-publisher';


export class CreateCounterUseCase<
    Command extends ICounterCreateCounterCommand = ICounterCreateCounterCommand,
    Response extends ICounterCounterCreatedResponse = ICounterCounterCreatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot: CounterAggregate;
    private readonly createProductUseCase: CreateProductUseCase
    private readonly getProduct: GetProductUseCase
    private readonly getPoster: GetPosterUseCase

    constructor(
        private readonly counterService: ICounterDomainService,
        private readonly counterCreatedProductEventPublisherBase: CounterCreatedProductEventPublisherBase,
        private readonly gettedPosterEventPublisherBase: GettedPosterEventPublisherBase,
        private readonly gettedProductEventPublisherBase: GettedProductEventPublisherBase
    ) {
        super();
        this.counterAggregateRoot = new CounterAggregate({
            counterService,
            counterCreatedProductEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<CounterDomainEntity | null> {
        const entity = this.createEntityCounterDomain(command)
        return this.exectueOrderAggregateRoot(entity as CounterDomainEntity)
    }

    private async createEntityCounterDomain(command: Command): Promise<CounterDomainEntity> {

        const _product = this.getProduct.execute({ productId: command.productId })
        const _poster = this.getPoster.execute({ posterId: command.posterId })

        return new CounterDomainEntity({ product: (await _product).data.product, poster: (await _poster).data.poster })
    }

    private exectueOrderAggregateRoot(entity: ICounterDomainEntity,): Promise<CounterDomainEntity | null> {
        return this.counterAggregateRoot.createCounter(entity as ICounterCreateCounterCommand)
    }
}