import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates/order.agregate";
import { ClientDomainBase, IClientEntity, IMangaEntity, MangaDomainBase } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { ClientObtainedEventPublisher, MangaModifiedEventPublisher, NameMangaModifiedEventPublisher, NameModifiedEventPublisher, PrinceModifiedEventPublisher, StateModifiedEventPublisher } from "src/subdomains/Store/contexts/Customer-Service/domain/events";
import { UpdateNameClient, UpdateNameManga, UpdatePhoneClient, UpdatePriceManga, UpdateStateManga, UpradedNameMangaResponse, UpradedNameResponse, UpradedPhoneResponse, UpradedPriceResponse, UpradedStateResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces";
import { ClientDomainService, MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { ClientNameValue, IdclientValue, IdmangaValue, MangaSateValue, NameMangaValue, PhoneValue, PriceValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";
import { PhoneModifiedEventPublisher } from '../../../../../domain/events/publishers/order/client/modified-Phone-event-publisher';

export class UpdateStateUseCase<
    Command extends UpdateStateManga = UpdateStateManga,
    Response extends UpradedStateResponse = UpradedStateResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly OrderAgregate: OrderAgregate;

    constructor(
        private readonly MangaService: MangaDomainService,
        private readonly StateModifiedEventPublisher: StateModifiedEventPublisher,
    ) {
        super();
        this.OrderAgregate = new OrderAgregate({
            MangaService,
            StateModifiedEventPublisher
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
        const entity = this.createEntityMangaSatate(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(
        command: Command
    ): IMangaEntity {
        const Mangaid =  new IdmangaValue(command.MangaId)
        const  state  = new   MangaSateValue (command.newState)
        return {
            Mangaid,
            state
        }
    }

    private validateValueObject(
        valueObject: MangaDomainBase
    ): void {
        
        const {
            Mangaid,
            state
        } = valueObject
      
      
        if ( Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (state.hasErrors())
            this.setErrors(state.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado para cambiar el estado  del manga  ',
                this.getErrors(),
            );

    }

    private createEntityMangaSatate(
        
        valueObject: MangaDomainBase

    ): MangaDomainBase {
       
        const {
            state,
            Mangaid
        } = valueObject

        return new MangaDomainBase({          
            state: state,
            Mangaid: Mangaid
        })

    }

    private exectueOrderAggregateRoot(
        entity: MangaDomainBase,
    ): Promise<MangaDomainBase | null> {
        return this.OrderAgregate.UpdateName(entity)
    }
}