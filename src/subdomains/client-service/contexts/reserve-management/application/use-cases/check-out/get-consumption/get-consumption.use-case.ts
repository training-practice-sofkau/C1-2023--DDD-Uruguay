import {
    IUseCase,
    ValueObjectErrorHandler
} from "src/libs/sofka";
import {
    ConsumptionDomainEntity,
    ConsumptionObtainedEventPublisher,
    IConsumptionDomainService,
    IConsumptionObtainedResponse,
    IGetConsumption,
    CheckOutAggregate
} from "../../../../domain";

export class GetConsumptionUseCase<
    Command extends IGetConsumption = IGetConsumption,
    Response extends IConsumptionObtainedResponse = IConsumptionObtainedResponse

>
    extends ValueObjectErrorHandler
    implements IUseCase<Command, Response>
{

    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly consumptionService: IConsumptionDomainService,
        private readonly consumptionObtainedEventPublisher: ConsumptionObtainedEventPublisher,
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            consumptionService,
            consumptionObtainedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }

    private async executeCommand(command: Command): Promise<ConsumptionDomainEntity | null> {
        return this.checkOutAggregate.getConsumption(command.consumptionId)
    }

}