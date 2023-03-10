import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { DateValueObject, IReserveDomainEntity, IReserveDomainService, IStartDateUpdatedResponse, IUpdateStartDate, ReserveAggregate, ReserveDomainEntity, StartDateUpdatedEventPublisher } from "../../../../domain";

export class UpdateStartDateUseCase<
Command extends IUpdateStartDate = IUpdateStartDate,
Response extends IStartDateUpdatedResponse = IStartDateUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
private readonly reserveAggregate: ReserveAggregate;

constructor(
    private readonly reserveService: IReserveDomainService,
    private readonly startDateUpdatedEventPublisher: StartDateUpdatedEventPublisher
) {
    super();
    this.reserveAggregate = new ReserveAggregate({
        reserveService,
        startDateUpdatedEventPublisher
    })
}

async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response
}


private async executeCommand(command: Command): Promise<IReserveDomainEntity | null> {
    const ValueObject = this.createValueObject(command);
    this.validateValueObject(ValueObject);
    const startDate = this.createNewStartDate(ValueObject);
    return this.exectueReserveAggregate(startDate)
}

private createValueObject(command: Command): IReserveDomainEntity {
    const startDate = new DateValueObject(command.Date);

    return {
        startDate,
    }
}

private validateValueObject(valueObject: IReserveDomainEntity): void {
    const {
        startDate,
    } = valueObject

    if (startDate instanceof DateValueObject && startDate.hasErrors())
        this.setErrors(startDate.getErrors());

    if (this.hasErrors() === true)
        throw new ValueObjectException(
            'Hay algunos errores en el comando ejecutado por UpdateStartDateUseCase',
            this.getErrors(),
        );
}

private createNewStartDate(valueObject: IReserveDomainEntity): ReserveDomainEntity {
    const {
        startDate,
        reserveId,
    } = valueObject

    return new ReserveDomainEntity({
        startDate: startDate,
        reserveId: reserveId.valueOf(),
    })
}

private exectueReserveAggregate(data: IReserveDomainEntity): Promise<ReserveDomainEntity | null> {
    return this.reserveAggregate.updateStartDate(data as IUpdateStartDate)
}
}
