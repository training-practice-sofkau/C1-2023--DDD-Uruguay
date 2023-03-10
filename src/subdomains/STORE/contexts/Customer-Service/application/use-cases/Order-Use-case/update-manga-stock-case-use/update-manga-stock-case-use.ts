import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates/order.agregate";
import { ClientDomainBase, IClientEntity, IMangaEntity, MangaDomainBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { ClientObtainedEventPublisher, MangaModifiedEventPublisher, NameMangaModifiedEventPublisher, NameModifiedEventPublisher, PrinceModifiedEventPublisher, StateModifiedEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events";
import { IUpdateMangaStock, UpdateNameClient, UpdateNameManga, UpdatePhoneClient, UpdatePriceManga, UpdateStateManga, UpradedMangaStockResponse, UpradedNameMangaResponse, UpradedNameResponse, UpradedPhoneResponse, UpradedPriceResponse, UpradedStateResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces";
import { ClientDomainService, MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { ClientNameValue, IdclientValue, IdmangaValue, MangaSateValue, NameMangaValue, PhoneValue, PriceValue, StockValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";

export class UpdateMangaStockCaseUse<
    Command extends IUpdateMangaStock = IUpdateMangaStock,
    Response extends UpradedMangaStockResponse = UpradedMangaStockResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly MangaService: MangaDomainService,
        private readonly ModifiedMangaStockingEventPublisher: MangaModifiedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            ModifiedMangaStockingEventPublisher
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
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IMangaEntity {
        const Mangaid =  new IdmangaValue(command.MangaId)
        const  Stock  = new   StockValue (command.MangaStock)
        return {
            Mangaid,
            Stock
        }
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        
        const {
            Mangaid,
            Stock
        } = valueObject
      
      
        if ( Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (Stock.hasErrors())
            this.setErrors(Stock.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el Stock  del manga  ',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        
        valueObject: MangaDomainBase

    ): MangaDomainBase {
       
        const {
            Stock,
            Mangaid
        } = valueObject

        return new MangaDomainBase({          
            Stock: Stock,
            Mangaid: Mangaid
        })

    }

    private exectueOrderAggregateRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase | null> {
        return this.OrderAgregate.UpdateName(entity)
    }
}