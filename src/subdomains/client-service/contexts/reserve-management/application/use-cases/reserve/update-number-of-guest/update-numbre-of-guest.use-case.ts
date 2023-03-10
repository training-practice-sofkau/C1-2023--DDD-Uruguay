import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { INumberOfGuestsUpdatedResponse, IReserveDomainEntity, IReserveDomainService, IUpdateNumberOfGuests, NumberOfGuestsUpdatedEventPublisher, NumberOfGuestsValueObject, ReserveAggregate, ReserveDomainEntity } from "../../../../domain";

export class UpdateNumbreOfGuestUseCase<
    Command extends IUpdateNumberOfGuests = IUpdateNumberOfGuests,
    Response extends INumberOfGuestsUpdatedResponse = INumberOfGuestsUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly numberOfGuestsUpdatedEventPublisher: NumberOfGuestsUpdatedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            numberOfGuestsUpdatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IReserveDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const numberOfGuests = this.createNewNumberOfGuests(ValueObject);
        return this.exectueReserveAggregate(numberOfGuests)
    }

    private createValueObject(command: Command): IReserveDomainEntity {
        const numberOfGuests = new NumberOfGuestsValueObject(command.numberOfGuests);

        return {
            numberOfGuests,
        }
    }

    private validateValueObject(valueObject: IReserveDomainEntity): void {
        const {
            numberOfGuests,
        } = valueObject

        if ( numberOfGuests instanceof  NumberOfGuestsValueObject &&  numberOfGuests.hasErrors())
            this.setErrors( numberOfGuests.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateNumbreOfGuestUseCase',
                this.getErrors(),
            );
    }

    private createNewNumberOfGuests(valueObject: IReserveDomainEntity): ReserveDomainEntity {
        const {
            numberOfGuests,
        } = valueObject

        return new ReserveDomainEntity({
            numberOfGuests: numberOfGuests.valueOf(),
        })
    }

    private exectueReserveAggregate(data: IReserveDomainEntity): Promise<ReserveDomainEntity | null> {
        return this.reserveAggregate.updateNumberOfGuests(data as IUpdateNumberOfGuests)
    }
}
