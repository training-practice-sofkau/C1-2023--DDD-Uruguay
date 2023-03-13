import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    ConsumptionDomainEntity,
    IConsumptionDomainEntity,
    IConsumptionDomainService,
    IMiniBarUpdatedResponse,
    IUpdateMiniBar,
    MiniBarUpdatedEventPublisher,
    MiniBarValueObject
} from "../../../../../domain";

export class UpdateMiniBarUseCase<
    Command extends IUpdateMiniBar = IUpdateMiniBar,
    Response extends IMiniBarUpdatedResponse = IMiniBarUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly consumptionService: IConsumptionDomainService,
        private readonly miniBarUpdatedEventPublisher: MiniBarUpdatedEventPublisher
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            consumptionService,
            miniBarUpdatedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IConsumptionDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const miniBar = this.createNewMiniBar(ValueObject);
        return this.exectueCheckOutAggregate(miniBar)
    }

    private createValueObject(command: Command): IConsumptionDomainEntity {
        const miniBar = new MiniBarValueObject(command.miniBar);

        return {
            miniBar,
        }
    }

    private validateValueObject(valueObject: IConsumptionDomainEntity): void {
        const {
            miniBar,
        } = valueObject

        if (miniBar instanceof MiniBarValueObject && miniBar.hasErrors())
            this.setErrors(miniBar.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateMiniBarUseCase',
                this.getErrors(),
            );
    }

    private createNewMiniBar(valueObject: IConsumptionDomainEntity): ConsumptionDomainEntity {
        const {
            miniBar,
            consumptionId,
        } = valueObject

        return new ConsumptionDomainEntity({
            miniBar: miniBar.valueOf(),
            consumptionId: consumptionId.valueOf(),
        })
    }

    private exectueCheckOutAggregate(data: IConsumptionDomainEntity): Promise<ConsumptionDomainEntity | null> {
        return this.checkOutAggregate.updateMiniBar(data as IUpdateMiniBar)
    }
}
