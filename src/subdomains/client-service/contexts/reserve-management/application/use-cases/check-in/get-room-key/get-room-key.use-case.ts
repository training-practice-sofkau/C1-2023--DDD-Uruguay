import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    IGetRoomKey,
    IRoomKeyDomainService,
    IRoomKeyObtainedResponse,
    CheckInAggregate,
    RoomKeyDomainEntity,
    RoomKeyObtainedEventPublisher
} from "../../../../domain";

export class GetRoomKeyUseCase<
    Command extends IGetRoomKey = IGetRoomKey,
    Response extends IRoomKeyObtainedResponse = IRoomKeyObtainedResponse
>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly roomKeyService: IRoomKeyDomainService,
        private readonly roomKeyObtainedEventPublisher: RoomKeyObtainedEventPublisher,
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            roomKeyService,
            roomKeyObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<RoomKeyDomainEntity | null> {
        return this.checkInAggregate.getRoomKey(command.roomKeyId)
    }
}