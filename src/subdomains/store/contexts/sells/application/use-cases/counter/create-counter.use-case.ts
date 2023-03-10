import { IUseCase, ValueObjectErrorHandler } from "src/libs";
import { CounterAggregate, ICounterCounterCreatedResponse, ICounterCreateCounterCommand, IdValueObject } from "../../../domain";
import { ICounterDomainService } from '../../../domain/services/counter.domain-service';
import { CounterCreatedProductEventPublisherBase } from '../../../domain/events/publishers/counter/created-product.event-publisher';
import { CounterDomainEntity } from '../../../domain/entities/counter/counter.domain-entity';
import { ICounterDomainEntity } from '../../../domain/entities/interfaces/counter.domain-entity.interface';


export class CreateCounterUseCase<
    Command extends ICounterCreateCounterCommand = ICounterCreateCounterCommand,
    Response extends ICounterCounterCreatedResponse = ICounterCounterCreatedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly counterAggregateRoot: CounterAggregate;

    constructor(
        private readonly counterService: ICounterDomainService,
        private readonly counterCreatedProductEventPublisherBase: CounterCreatedProductEventPublisherBase,
    ) {
        super();
        this.counterAggregateRoot = new CounterAggregate({
            counterService,
            counterCreatedProductEventPublisherBase
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<CounterDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const entity = this.createEntityClientDomain(ValueObject);
        return this.exectueOrderAggregateRoot(entity)
    }

    private createValueObject(command: Command): ICounterDomainEntity {
        const counterId = new IdValueObject(command.counterId);
        const product = new (command.product);
        const poster = new PhoneObjectValue(command.poster);

        return {
            counterId,
            product,
            poster
        }
    }

    private validateValueObject(
        valueObject: IClientDomainEntity
    ): void {
        const {
            fullName,
            phone
        } = valueObject

        if (fullName instanceof FullNameValueObject && fullName.hasErrors())
            this.setErrors(fullName.getErrors());

        if (phone instanceof PhoneObjectValue && phone.hasErrors())
            this.setErrors(phone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddClientUseCase',
                this.getErrors(),
            );

    }

    private createEntityClientDomain(
        valueObject: IClientDomainEntity
    ): ClientDomainEntitybase {

        const {
            fullName,
            phone
        } = valueObject

        return new ClientDomainEntitybase({
            fullName: fullName.valueOf(),
            phone: phone.valueOf()
        })
    }

    private exectueOrderAggregateRoot(
        entity: ClientDomainEntitybase,
    ): Promise<ClientDomainEntitybase | null> {
        return this.orderAggregateRoot.registerClient(entity)
    }
}