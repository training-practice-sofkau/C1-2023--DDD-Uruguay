import { ValueObjectErrorHandler, IUseCase } from "src/libs";
import { IGetProductCommand, IGettedProductResponse, CounterAggregate, IProductDomainService, GettedProductEventPublisherBase, ProductDomainEntity } from "../../../domain";

export class GetProductUseCase<
    Command extends IGetProductCommand = IGetProductCommand,
    Response extends IGettedProductResponse = IGettedProductResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot: CounterAggregate

    constructor(
        private readonly productService: IProductDomainService,
        private readonly gettedProductEventPublisherBase: GettedProductEventPublisherBase
    ) {
        super();
        this.counterAggregateRoot = new CounterAggregate({
            productService,
            gettedProductEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command)
        return { success: data ? true : false, data } as unknown as Response
    }

    executeCommand(command: Command): Promise<ProductDomainEntity | null> {
        return this.counterAggregateRoot.getProduct(command.productId)
    }
}