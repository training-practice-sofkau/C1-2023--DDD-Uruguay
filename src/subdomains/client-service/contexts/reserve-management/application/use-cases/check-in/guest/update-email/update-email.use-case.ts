import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckInAggregate,
    EmailUpdatedEventPublisher,
    EmailValueObject,
    GuestDomainEntity,
    ICheckInDomainService,
    IEmailUpdatedResponse,
    IGuestDomainEntity,
    IUpdateEmail
} from "../../../../../domain";

export class UpdateEmailUseCase<
    Command extends IUpdateEmail = IUpdateEmail,
    Response extends IEmailUpdatedResponse = IEmailUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly checkInService: ICheckInDomainService,
        private readonly emailUpdatedEventPublisher: EmailUpdatedEventPublisher
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            checkInService,
            emailUpdatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IGuestDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const email = this.createNewEmail(ValueObject);
        return this.exectueCheckInAggregate(email)
    }

    private createValueObject(command: Command): IGuestDomainEntity {
        const email = new EmailValueObject(command.email);

        return {
            email,
        }
    }

    private validateValueObject(valueObject: IGuestDomainEntity): void {
        const {
            email,
        } = valueObject

        if (email instanceof EmailValueObject && email.hasErrors())
            this.setErrors(email.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateEmailUseCase',
                this.getErrors(),
            );
    }

    private createNewEmail(valueObject: IGuestDomainEntity): GuestDomainEntity {
        const {
            email,
            guestId,
        } = valueObject

        return new GuestDomainEntity({
            email: email.valueOf(),
            guestId: guestId.valueOf(),
        })
    }

    private exectueCheckInAggregate(data: IGuestDomainEntity): Promise<GuestDomainEntity | null> {
        return this.checkInAggregate.updateEmail(data as IUpdateEmail)
    }
}
