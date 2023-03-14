import { StateModifiedEventPublisher } from './../../../../../domain/events/publishers/order/manga/modified-state-event-publisher';
import { ValueObjectErrorHandler, IUseCase, ValueObjectException } from "src/libs";
import { OrderAgregate } from "src/subdomains/Store/contexts/Customer-Service/domain/aggregates";
import { MangaDomainBase, IMangaEntity } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { UpdateStateManga } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands";
import { UpradedStateResponse } from "src/subdomains/Store/contexts/Customer-Service/domain/interfaces/responses/Order-Response";
import { MangaDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { IdmangaValue, MangaSateValue } from "src/subdomains/Store/contexts/Customer-Service/domain/value-objects";

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
      
      
        if (Mangaid instanceof IdmangaValue && Mangaid.hasErrors())
        this.setErrors(Mangaid.getErrors());

        if (state instanceof  MangaSateValue && state.hasErrors())
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