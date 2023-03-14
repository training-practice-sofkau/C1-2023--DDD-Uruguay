import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates";
import { MangaDomainBase, IMangaEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { UpdateNameManga } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { UpradedNameMangaResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/responses/Order-Response";
import { MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { IdmangaValue, NameMangaValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
import { NameMangaModifiedEventPublisher } from 'src/subdomains/Store/contexts/Customer-Service/domain/events/publishers/order/';

export class UpdateNameUseCase<
    Command extends UpdateNameManga = UpdateNameManga,
    Response extends UpradedNameMangaResponse = UpradedNameMangaResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly MangaService: MangaDomainService,
        private readonly NameMangaModifiedEventPublisher: NameMangaModifiedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            NameMangaModifiedEventPublisher
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
        const entity = this.createEntityMangaName(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IMangaEntity {
        const Mangaid =  new IdmangaValue(command.MangaId)
        const  Name  = new  NameMangaValue (command.newName)
        return {
            Mangaid,
            Name
        }
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        
        const {
            Mangaid,
            Name
        } = valueObject
      
      
        if (Mangaid instanceof IdmangaValue && Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (Name instanceof NameMangaValue &&  Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el nombre   del manga  ',
                this.getErrors(),
            );

    }

    private createEntityMangaName(
        
        valueObject: MangaDomainBase

    ): MangaDomainBase {
       
        const {
            Name,
            Mangaid
        } = valueObject

        return new MangaDomainBase({          
            Name: Name,
            Mangaid: Mangaid
        })

    }

    private exectueOrderAggregateRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase | null> {
        return this.OrderAgregate.UpdateName(entity)
    }
}