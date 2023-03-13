import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    AccommodationValueObject,
    IAddRoom,
    IRoomAddedResponse,
    IRoomDomainEntity,
    IRoomDomainService,
    LocationValueObject,
    ReserveAggregate,
    RoomAddedEventPublisher,
    RoomDomainEntity,
    RoomNumberValueObject,
    StateValueObject,
    TypeValueObject
} from "../../../../domain";

export class AddRoomUseCase<
    Command extends IAddRoom = IAddRoom,
    Response extends IRoomAddedResponse = IRoomAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly roomService: IRoomDomainService,
        private readonly roomAddedEventPublisher: RoomAddedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            roomService,
            roomAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<RoomDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const room = this.createEntityRoomDomain(ValueObject);
        return this.exectueReserveAggregate(room)
    }

    private createValueObject(command: Command): IRoomDomainEntity {
        const roomNumber = new RoomNumberValueObject(command.roomNumber);
        const accommodation = new AccommodationValueObject(command.accommodation);
        const location = new LocationValueObject(command.location);
        const state = new StateValueObject(command.state);
        const type = new TypeValueObject(command.type);

        return {
            roomNumber,
            accommodation,
            location,
            state,
            type
        }
    }
    
    private validateValueObject(valueObject: IRoomDomainEntity): void {
        const {
            roomNumber,
            accommodation,
            location,
            state,
            type
        } = valueObject

        if (roomNumber instanceof RoomNumberValueObject && roomNumber.hasErrors())
            this.setErrors(roomNumber.getErrors());

        if (accommodation instanceof AccommodationValueObject && accommodation.hasErrors())
            this.setErrors(accommodation.getErrors());

        if (location instanceof LocationValueObject && location.hasErrors())
            this.setErrors(location.getErrors());

        if (state instanceof StateValueObject && state.hasErrors())
            this.setErrors(state.getErrors());

        if (type instanceof TypeValueObject && type.hasErrors())
            this.setErrors(type.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddRoomUseCase',
                this.getErrors(),
            );
    }

    private createEntityRoomDomain(valueObject: IRoomDomainEntity): RoomDomainEntity {
        const {
            roomNumber,
            accommodation,
            location,
            state,
            type
        } = valueObject

        return new RoomDomainEntity({
            roomNumber: roomNumber.valueOf(),
            accommodation: accommodation.valueOf(),
            location: location.valueOf(),
            state: state.valueOf(),
            type: type.valueOf(),
        })
    }

    private exectueReserveAggregate(room: IRoomDomainEntity): Promise<RoomDomainEntity | null> {
        return this.reserveAggregate.addRoom(room as IAddRoom)
    }
}
