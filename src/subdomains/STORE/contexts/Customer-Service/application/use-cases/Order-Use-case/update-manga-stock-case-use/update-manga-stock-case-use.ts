import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates";
import { MangaDomainBase, IMangaEntity } from "../../../../domain/entities";
import { MangaModifiedEventPublisher } from "../../../../domain/events/publishers/order";
import { IUpdateMangaStock } from "../../../../domain/interfaces/commands";
import { UpradedMangaStockResponse } from "../../../../domain/interfaces/responses/Order-Response";
import { MangaDomainService } from "../../../../domain/services";
import { IdmangaValue, StockValue, NameMangaValue } from "../../../../domain/value-objects";

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
        const entity = this.createEntityMangaStock(ValueObject);
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
      
      
        if (Mangaid instanceof NameMangaValue && Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (Stock instanceof StockValue && Stock.hasErrors())
            this.setErrors(Stock.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el Stock  del manga  ',
                this.getErrors(),
            );

    }

    private createEntityMangaStock(
        
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