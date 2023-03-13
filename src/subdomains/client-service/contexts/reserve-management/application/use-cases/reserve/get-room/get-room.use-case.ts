import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    IGetRoom,
    IRoomDomainService,
    IRoomObtainedResponse,
    ReserveAggregate,
    RoomDomainEntity,
    RoomObtainedEventPublisher
} from "../../../../domain";

export class GetRoomUseCase<
    Command extends IGetRoom = IGetRoom,
    Response extends IRoomObtainedResponse = IRoomObtainedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly roomService: IRoomDomainService,
        private readonly roomObtainedEventPublisher: RoomObtainedEventPublisher,
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            roomService,
            roomObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<RoomDomainEntity | null> {
        return this.reserveAggregate.getRoom(command.roomId)
    }
}