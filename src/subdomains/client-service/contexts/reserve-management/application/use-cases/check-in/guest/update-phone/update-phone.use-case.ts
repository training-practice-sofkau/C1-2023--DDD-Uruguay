import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/libs/sofka";
import { CheckInAggregate, GuestDomainEntity, ICheckInDomainService, IGuestDomainEntity, IPhoneUpdatedResponse, IUpdatePhone, PhoneUpdatedEventPublisher, PhoneValueObject } from "../../../../../domain";

export class UpdatePhoneUseCase<
Command extends IUpdatePhone = IUpdatePhone,
Response extends IPhoneUpdatedResponse = IPhoneUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
private readonly checkInAggregate: CheckInAggregate;

constructor(
    private readonly checkInService: ICheckInDomainService,
    private readonly phoneUpdatedEventPublisher: PhoneUpdatedEventPublisher
) {
    super();
    this.checkInAggregate = new CheckInAggregate({
        checkInService,
        phoneUpdatedEventPublisher
    })
}

async execute(command?: Command): Promise<Response> {
    const data = await this.executeCommand(command);

    return { success: data ? true : false, data } as unknown as Response
}


private async executeCommand(command: Command): Promise<IGuestDomainEntity | null> {
    const ValueObject = this.createValueObject(command);
    this.validateValueObject(ValueObject);
    const phone = this.createNewPhone(ValueObject);
    return this.exectueCheckInAggregate(phone)
}

private createValueObject(command: Command): IGuestDomainEntity {
    const phone = new PhoneValueObject(command.phone);

    return {
        phone,
    }
}

private validateValueObject(valueObject: IGuestDomainEntity): void {
    const {
        phone,
    } = valueObject

    if (phone instanceof PhoneValueObject && phone.hasErrors())
        this.setErrors(phone.getErrors());

    if (this.hasErrors() === true)
        throw new ValueObjectException(
            'Hay algunos errores en el comando ejecutado por UpdatePhoneUseCase',
            this.getErrors(),
        );
}

private createNewPhone(valueObject: IGuestDomainEntity): GuestDomainEntity {
    const {
        phone,
        guestId,
    } = valueObject

    return new GuestDomainEntity({
        phone: phone.valueOf(),
        guestId: guestId.valueOf(),
    })
}

private exectueCheckInAggregate(data: IGuestDomainEntity): Promise<GuestDomainEntity | null> {
    return this.checkInAggregate.updatePhone(data as IUpdatePhone)
}
}
