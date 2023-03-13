import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    GuestDomainEntity,
    GuestObtainedEventPublisher,
    IGuestDomainService,
    IGuestObtainedResponse,
    IGetGuest,
    CheckInAggregate
} from "../../../../domain";

export class GetGuestUseCase<
    Command extends IGetGuest = IGetGuest,
    Response extends IGuestObtainedResponse = IGuestObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly checkInAggregate: CheckInAggregate;

    constructor(
        private readonly guestService: IGuestDomainService,
        private readonly guestObtainedEventPublisher: GuestObtainedEventPublisher,
    ) {
        super();
        this.checkInAggregate = new CheckInAggregate({
            guestService,
            guestObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<GuestDomainEntity | null> {
        return this.checkInAggregate.getGuest(command.guestId)
    }

}