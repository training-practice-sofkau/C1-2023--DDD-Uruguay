import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    AccessLevelValueObject,
    CheckInAggregate,
    IAddRoomKey,
    ICheckInDomainService,
    IRoomKeyAddedResponse,
    IRoomKeyDomainEntity,
    RoomKeyAddedEventPublisher,
    RoomKeyDomainEntity,
    RoomNumberValueObject
} from "../../../../domain";

export class AddRoomKeyUseCase<
    Command extends IAddRoomKey = IAddRoomKey,
    Response extends IRoomKeyAddedResponse = IRoomKeyAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly checkInService: ICheckInDomainService,
        private readonly roomKeyAddedEventPublisher: RoomKeyAddedEventPublisher
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            checkInService,
            roomKeyAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<RoomKeyDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const room = this.createEntityRoomKeyDomain(ValueObject);
        return this.exectueCheckInAggregate(room)
    }

    private createValueObject(command: Command): IRoomKeyDomainEntity {
        const roomNumber = new RoomNumberValueObject(command.roomNumber);
        const accessLevel = new AccessLevelValueObject(command.accessLevel);

        return {
            roomNumber,
            accessLevel,
        }
    }

    private validateValueObject(valueObject: IRoomKeyDomainEntity): void {
        const {
            roomNumber,
            accessLevel,
        } = valueObject

        if (roomNumber instanceof RoomNumberValueObject && roomNumber.hasErrors())
            this.setErrors(roomNumber.getErrors());

        if (accessLevel instanceof AccessLevelValueObject && accessLevel.hasErrors())
            this.setErrors(accessLevel.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddGuestUseCase',
                this.getErrors(),
            );
    }

    private createEntityRoomKeyDomain(valueObject: IRoomKeyDomainEntity): RoomKeyDomainEntity {
        const {
            roomNumber,
            accessLevel,
        } = valueObject

        return new RoomKeyDomainEntity({
            roomNumber: roomNumber.valueOf(),
            accessLevel: accessLevel.valueOf(),
        })
    }

    private exectueCheckInAggregate(room: IRoomKeyDomainEntity): Promise<RoomKeyDomainEntity | null> {
        return this.checkInAggregate.addRoomKey(room as IAddRoomKey)
    }
}
