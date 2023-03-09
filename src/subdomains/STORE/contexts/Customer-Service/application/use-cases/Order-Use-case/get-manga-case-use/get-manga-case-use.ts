import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { IGetClient, IGetManga, MangaObtainedResponse } from "../../../../domain/interfaces";
import { ClientObtainedResponse } from '../../../../domain/interfaces/responses/Order-Response/client-obtained-response';
import { ClientDomainService, MangaDomainService } from "../../../../domain/services";
import { ClientObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/Client-obtained-event-publisher';
import { ClientDomainBase } from '../../../../domain/entities/Order-domain/client-domain-entity';
import { ClientNameValue,  IdmangaValue,  MangaSateValue,  NameMangaValue,  PhoneValue, PriceValue, StockValue } from "../../../../domain/value-objects";
import { MangaDomainBase } from '../../../../domain/entities/Order-domain/manga-domain-entity';

export class GetMangaCaseUse<
    Command extends IGetManga = IGetManga,
    Response extends MangaObtainedResponse =  MangaObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;
    database: MangaDomainBase[]  = [];

    constructor(
        private readonly MangaService: MangaDomainService,
        private readonly GetClientEventPublisher: ClientObtainedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            GetClientEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(
        command: Command
    ): Promise< MangaDomainBase | null> {
        const ValueObject = this.getManga(command.MangaID);
        this.validateValueObject(ValueObject);
        return this.execueteGetorderRoot(ValueObject)
    }


    private getManga(
        idmanga: string
    ): MangaDomainBase {
        return this.database.find((item) => item.Mangaid.valueOf === idmanga.valueOf);
        

       
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        const {
            Mangaid,
            Name,
            Price,
            Stock,
            state
        } = valueObject
      

        if (Mangaid instanceof IdmangaValue && Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());    

        if (Price instanceof PriceValue && Price.hasErrors())
            this.setErrors(Price.getErrors());    

        if (Name instanceof NameMangaValue && Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (Stock instanceof StockValue && Stock.hasErrors())
            this.setErrors(Stock.getErrors());    

        if (Name instanceof NameMangaValue && Name.hasErrors())
            this.setErrors(Name.getErrors());

        if (state instanceof MangaSateValue && state.hasErrors())
            this.setErrors(state.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para obtener datos',
                this.getErrors(),
            );

    }
  

    private execueteGetorderRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase > {     

        return this.OrderAgregate.GetManga({mangaID: entity.Mangaid.toString()})
    }}
