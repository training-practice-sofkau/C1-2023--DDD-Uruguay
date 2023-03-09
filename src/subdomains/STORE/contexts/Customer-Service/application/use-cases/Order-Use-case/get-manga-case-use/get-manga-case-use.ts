import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs";
import { OrderAgregate } from "../../../../domain/aggregates/order.agregate";
import { IGetClient, IGetManga, MangaObtainedResponse } from "../../../../domain/interfaces";
import { ClientObtainedResponse } from '../../../../domain/interfaces/responses/Order-Response/client-obtained-response';
import { ClientDomainService, MangaDomainService } from "../../../../domain/services";
import { ClientDomainBase } from '../../../../domain/entities/Order-domain/client-domain-entity';
import { ClientNameValue,  IdmangaValue,  MangaSateValue,  NameMangaValue,  PhoneValue, PriceValue, StockValue } from "../../../../domain/value-objects";
import { MangaDomainBase } from '../../../../domain/entities/Order-domain/manga-domain-entity';
import { MangaObtainedEventPublisher } from '../../../../domain/events/publishers/Sale/Bill/manga-obtained-event-publisher';
import { MangaModifiedEventPublisher } from '../../../../domain/events/publishers/order/modified-manga-stock-event-publisher';

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
        private readonly GetMangaEventPublisher: MangaObtainedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            GetMangaEventPublisher,
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
        return this.execueteGetorderRoot(ValueObject)
    }


    private getManga(
        idmanga: string
    ): MangaDomainBase {
        return this.database.find((item) => item.Mangaid.valueOf === idmanga.valueOf);
               
    }

    private execueteGetorderRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase > {     

        return this.OrderAgregate.GetManga({mangaID: entity.Mangaid.toString()})
    }}
