import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckInAggregate,
    DocumentValueObject,
    EmailValueObject,
    FullNameValueObject,
    GuestAddedEventPublisher,
    GuestDomainEntity,
    IAddGuest,
    ICheckInDomainService,
    IGuestAddedResponse,
    IGuestDomainEntity,
    PhoneValueObject
} from "../../../../domain";

export class AddGuestUseCase<
    Command extends IAddGuest = IAddGuest,
    Response extends IGuestAddedResponse = IGuestAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly checkInService: ICheckInDomainService,
        private readonly guestAddedEventPublisher: GuestAddedEventPublisher
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            checkInService,
            guestAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<GuestDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const guest = this.createEntityGuestDomain(ValueObject);
        return this.exectueCheckInAggregate(guest)
    }

    private createValueObject(command: Command): IGuestDomainEntity {
        const fullName = new FullNameValueObject(command.fullName);
        const document = new DocumentValueObject(command.document);
        const email = new EmailValueObject(command.email);
        const phone = new PhoneValueObject(command.phone);

        return {
            fullName,
            document,
            email,
            phone
        }
    }

    private validateValueObject(valueObject: IGuestDomainEntity): void {
        const {
            fullName,
            document,
            email,
            phone
        } = valueObject

        if (fullName instanceof FullNameValueObject && fullName.hasErrors())
            this.setErrors(fullName.getErrors());

        if (document instanceof DocumentValueObject && document.hasErrors())
            this.setErrors(document.getErrors());

        if (email instanceof EmailValueObject && email.hasErrors())
            this.setErrors(email.getErrors());

        if (phone instanceof PhoneValueObject && phone.hasErrors())
            this.setErrors(phone.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddGuestUseCase',
                this.getErrors(),
            );
    }

    private createEntityGuestDomain(valueObject: IGuestDomainEntity): GuestDomainEntity {
        const {
            fullName,
            document,
            email,
            phone
        } = valueObject

        return new GuestDomainEntity({
            fullName: fullName.valueOf(),
            document: document.valueOf(),
            email: email.valueOf(),
            phone: phone.valueOf(),
        })
    }

    private exectueCheckInAggregate(guest: IGuestDomainEntity): Promise<GuestDomainEntity | null> {
        return this.checkInAggregate.addGuest(guest as IAddGuest)
    }
}
