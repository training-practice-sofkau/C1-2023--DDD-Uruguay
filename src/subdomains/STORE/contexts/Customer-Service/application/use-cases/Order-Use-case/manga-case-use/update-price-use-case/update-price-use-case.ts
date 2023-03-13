import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates";
import { MangaDomainBase, IMangaEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { UpdatePriceManga } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { UpradedPriceResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/responses/Order-Response";
import { MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { IdmangaValue, PriceValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
import { PrinceModifiedEventPublisher } from 'src/subdomains/Store/contexts/Customer-Service/domain/events/publishers/order/';

export class UpdatePriceUseCase<
    Command extends UpdatePriceManga = UpdatePriceManga,
    Response extends UpradedPriceResponse = UpradedPriceResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly MangaService: MangaDomainService,
        private readonly PrinceModifiedEventPublisher: PrinceModifiedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            PrinceModifiedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise<MangaDomainBase | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityMangaPrice(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IMangaEntity {
        const Mangaid =  new IdmangaValue(command.MangaId)
        const  Price  = new   PriceValue (command.newPrice)
        return {
            Mangaid,
            Price
        }
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        
        const {
            Mangaid,
            Price
        } = valueObject
      
      
        if (Mangaid instanceof IdmangaValue && Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (Price instanceof  PriceValue && Price.hasErrors())
            this.setErrors(Price.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el precio   del manga  ',
                this.getErrors(),
            );

    }

    private createEntityMangaPrice(
        
        valueObject: MangaDomainBase

    ): MangaDomainBase {
       
        const {
            Price,
            Mangaid
        } = valueObject

        return new MangaDomainBase({          
            Price: Price,
            Mangaid: Mangaid
        })

    }

    private exectueOrderAggregateRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase | null> {
        return this.OrderAgregate.UpdateName(entity)
    }
}