import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { CounterAggregate, CounterCreatedProductEventPublisherBase, DateValueObject, FlavourValueObject, ICounterCreateProductCommand, ICounterProductCreatedResponse, IdValueObject, IProductDomainEntity, IProductDomainService, PriceValueObject, ProductDomainEntity, ProductTypeValueObject, StockValueObject } from "../../../domain";

export class CreateProductUseCase<
    Command extends ICounterCreateProductCommand = ICounterCreateProductCommand,
    Response extends ICounterProductCreatedResponse = ICounterProductCreatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot : CounterAggregate

    constructor(
        private readonly productService : IProductDomainService,
        private readonly counterCreatedProductEventPublisherBase : CounterCreatedProductEventPublisherBase
    ){
        super();
        this.counterAggregateRoot = new CounterAggregate({
            productService,
            counterCreatedProductEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command)
        return { success: data ? true : false, data } as unknown as Response
    }

    executeCommand(command: Command): Promise<ProductDomainEntity | null> {
        const valueObject = this.createValueObject(command)
        this.validateValueObject(valueObject)
        return 
    }

    createValueObject(command : Command): IProductDomainEntity{
        const productId = new IdValueObject(command.productId)
        const type = new ProductTypeValueObject(command.type)
        const flavour = new FlavourValueObject(command.flavour)
        const price = new PriceValueObject(command.price)
        const stock = new StockValueObject(command.stock)
        const expirationDate = new DateValueObject(command.expirationDate)

        return {
            productId,
            type,
            flavour,
            price,
            stock,
            expirationDate
        }
    }

    validateValueObject(valueObject: I){

    }

    executeOrderAggregateRoot(){

    }



}