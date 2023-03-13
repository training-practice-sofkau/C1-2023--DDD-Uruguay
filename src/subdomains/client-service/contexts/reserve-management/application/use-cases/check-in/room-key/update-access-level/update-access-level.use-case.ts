import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    AccessLevelUpdatedEventPublisher,
    AccessLevelValueObject,
    CheckInAggregate,
    IAccessLevelUpdatedResponse,
    IRoomKeyDomainEntity,
    IRoomKeyDomainService,
    IUpdateAccessLevel,
    RoomKeyDomainEntity
} from "../../../../../domain";

export class UpdateAccessLevelUseCase<
    Command extends IUpdateAccessLevel = IUpdateAccessLevel,
    Response extends IAccessLevelUpdatedResponse = IAccessLevelUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly roomKeyService: IRoomKeyDomainService,
        private readonly accessLevelUpdatedEventPublisher: AccessLevelUpdatedEventPublisher
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            roomKeyService,
            accessLevelUpdatedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IRoomKeyDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const accessLevel = this.createNewAccessLevel(ValueObject);
        return this.exectueCheckInAggregate(accessLevel)
    }

    private createValueObject(command: Command): IRoomKeyDomainEntity {
        const accessLevel = new AccessLevelValueObject(command.accessLevel);

        return {
            accessLevel,
        }
    }

    private validateValueObject(valueObject: IRoomKeyDomainEntity): void {
        const {
            accessLevel,
        } = valueObject

        if (accessLevel instanceof AccessLevelValueObject && accessLevel.hasErrors())
            this.setErrors(accessLevel.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateAccessLevelUseCase',
                this.getErrors(),
            );
    }

    private createNewAccessLevel(valueObject: IRoomKeyDomainEntity): RoomKeyDomainEntity {
        const {
            accessLevel,
            roomKeyId,
        } = valueObject

        return new RoomKeyDomainEntity({
            accessLevel: accessLevel.valueOf(),
            roomKeyId: roomKeyId.valueOf(),
        })
    }

    private exectueCheckInAggregate(data: IRoomKeyDomainEntity): Promise<RoomKeyDomainEntity | null> {
        return this.checkInAggregate.updateAccessLevel(data as IUpdateAccessLevel)
    }
}

