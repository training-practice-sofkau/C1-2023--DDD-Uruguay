import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    DateValueObject,
    ICreateReserve,
    IReserveCreatedResponse,
    IReserveDomainEntity,
    IReserveDomainService,
    NumberOfGuestsValueObject,
    ReserveAggregate,
    ReserveCreatedEventPublisher,
    ReserveDomainEntity
} from "../../../../domain";

export class CreateReserveUseCase<
    Command extends ICreateReserve = ICreateReserve,
    Response extends IReserveCreatedResponse = IReserveCreatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly reserveCreatedEventPublisher: ReserveCreatedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            reserveCreatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<ReserveDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const reserve = this.createEntityReserveDomain(ValueObject);
        return this.exectueReserveAggregate(reserve)
    }

    private createValueObject(command: Command): IReserveDomainEntity {
        const numberOfGuests = new NumberOfGuestsValueObject(command.numberOfGuests);
        const startDate = new DateValueObject(command.startDate);

        return {
            numberOfGuests,
            startDate
        }
    }

    private validateValueObject(valueObject: IReserveDomainEntity): void {
        const {
            numberOfGuests,
            startDate
        } = valueObject

        if (numberOfGuests instanceof NumberOfGuestsValueObject && numberOfGuests.hasErrors())
            this.setErrors(numberOfGuests.getErrors());

        if (startDate instanceof DateValueObject && startDate.hasErrors())
            this.setErrors(startDate.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddRoomUseCase',
                this.getErrors(),
            );
    }

    private createEntityReserveDomain(valueObject: IReserveDomainEntity): ReserveDomainEntity {
        const {
            numberOfGuests,
            startDate
        } = valueObject

        return new ReserveDomainEntity({
            numberOfGuests: numberOfGuests.valueOf(),
            startDate: startDate,
        })
    }

    private exectueReserveAggregate(reserve: IReserveDomainEntity): Promise<ReserveDomainEntity | null> {
        return this.reserveAggregate.createReserve(reserve as ICreateReserve)
    }
}
