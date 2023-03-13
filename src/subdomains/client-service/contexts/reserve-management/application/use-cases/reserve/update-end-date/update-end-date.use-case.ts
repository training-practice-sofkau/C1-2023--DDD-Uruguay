import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    DateValueObject,
    EndDateUpdatedEventPublisher,
    IEndDateUpdatedResponse,
    IReserveDomainEntity,
    IReserveDomainService,
    IUpdateEndDate,
    ReserveAggregate,
    ReserveDomainEntity
} from "../../../../domain";

export class UpdateEndDateUseCase<
    Command extends IUpdateEndDate = IUpdateEndDate,
    Response extends IEndDateUpdatedResponse = IEndDateUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly endDateUpdatedEventPublisher: EndDateUpdatedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            endDateUpdatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IReserveDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const endDate = this.createNewendDate(ValueObject);
        return this.exectueReserveAggregate(endDate)
    }

    private createValueObject(command: Command): IReserveDomainEntity {
        const endDate = new DateValueObject(command.Date);

        return {
            endDate,
        }
    }

    private validateValueObject(valueObject: IReserveDomainEntity): void {
        const {
            endDate,
        } = valueObject

        if (endDate instanceof DateValueObject && endDate.hasErrors())
            this.setErrors(endDate.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateEndDateUseCase',
                this.getErrors(),
            );
    }

    private createNewendDate(valueObject: IReserveDomainEntity): ReserveDomainEntity {
        const {
            endDate,
            reserveId,
        } = valueObject

        return new ReserveDomainEntity({
            endDate: endDate,
            reserveId: reserveId.valueOf(),
        })
    }

    private exectueReserveAggregate(data: IReserveDomainEntity): Promise<ReserveDomainEntity | null> {
        return this.reserveAggregate.updateEndDate(data as IUpdateEndDate)
    }
}
