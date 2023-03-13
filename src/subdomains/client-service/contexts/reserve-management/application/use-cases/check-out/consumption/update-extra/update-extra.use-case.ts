import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    ConsumptionDomainEntity,
    ExtraUpdatedEventPublisher,
    ExtraValueObject,
    IConsumptionDomainEntity,
    IConsumptionDomainService,
    IExtraUpdatedResponse,
    IUpdateExtra
} from "../../../../../domain";

export class UpdateExtraUseCase<
    Command extends IUpdateExtra = IUpdateExtra,
    Response extends IExtraUpdatedResponse = IExtraUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly consumptionService: IConsumptionDomainService,
        private readonly extraUpdatedEventPublisher: ExtraUpdatedEventPublisher
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            consumptionService,
            extraUpdatedEventPublisher,
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IConsumptionDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const extra = this.createNewExtra(ValueObject);
        return this.exectueCheckOutAggregate(extra)
    }

    private createValueObject(command: Command): IConsumptionDomainEntity {
        const extra = new ExtraValueObject(command.extra);

        return {
            extra,
        }
    }

    private validateValueObject(valueObject: IConsumptionDomainEntity): void {
        const {
            extra,
        } = valueObject

        if (extra instanceof ExtraValueObject && extra.hasErrors())
            this.setErrors(extra.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateExtraUseCase',
                this.getErrors(),
            );
    }

    private createNewExtra(valueObject: IConsumptionDomainEntity): ConsumptionDomainEntity {
        const {
            extra,
            consumptionId,
        } = valueObject

        return new ConsumptionDomainEntity({
            extra: extra.valueOf(),
            consumptionId: consumptionId.valueOf(),
        })
    }

    private exectueCheckOutAggregate(data: IConsumptionDomainEntity): Promise<ConsumptionDomainEntity | null> {
        return this.checkOutAggregate.updateExtra(data as IUpdateExtra)
    }
}
