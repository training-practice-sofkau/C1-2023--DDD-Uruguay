import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    CheckOutAggregate,
    ConsumptionAddedEventPublisher,
    ConsumptionDomainEntity,
    ConsumptionFoodValueObject,
    ExtraValueObject,
    IAddConsumption,
    ICheckOutDomainService,
    IConsumptionAddedResponse,
    IConsumptionDomainEntity,
    LaundryValueObject,
    MiniBarValueObject
} from "../../../../domain";

export class AddConsumptionUseCase<
    Command extends IAddConsumption = IAddConsumption,
    Response extends IConsumptionAddedResponse = IConsumptionAddedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly checkOutAggregate: CheckOutAggregate;

    constructor(
        private readonly checkOutService: ICheckOutDomainService,
        private readonly consumptionAddedEventPublisher: ConsumptionAddedEventPublisher
    ) {
        super();
        this.checkOutAggregate = new CheckOutAggregate({
            checkOutService,
            consumptionAddedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<ConsumptionDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const checkOut = this.createEntityConsumptionDomain(ValueObject);
        return this.exectueCheckOutAggregate(checkOut)
    }

    private createValueObject(command: Command): IConsumptionDomainEntity {
        const consumptionFood = new ConsumptionFoodValueObject(command.consumptionFood);
        const extra = new ExtraValueObject(command.extra);
        const laundry = new LaundryValueObject(command.laundry);
        const miniBar = new MiniBarValueObject(command.miniBar);

        return {
            consumptionFood,
            extra,
            laundry,
            miniBar,
        }
    }

    private validateValueObject(valueObject: IConsumptionDomainEntity): void {
        const {
            consumptionFood,
            extra,
            laundry,
            miniBar,
        } = valueObject

        if (consumptionFood instanceof ConsumptionFoodValueObject && consumptionFood.hasErrors())
            this.setErrors(consumptionFood.getErrors());

        if (extra instanceof ExtraValueObject && extra.hasErrors())
            this.setErrors(extra.getErrors());

        if (laundry instanceof LaundryValueObject && laundry.hasErrors())
            this.setErrors(laundry.getErrors());

        if (miniBar instanceof MiniBarValueObject && miniBar.hasErrors())
            this.setErrors(miniBar.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por AddConsumptionUseCase',
                this.getErrors(),
            );
    }

    private createEntityConsumptionDomain(valueObject: IConsumptionDomainEntity): ConsumptionDomainEntity {
        const {
            consumptionFood,
            extra,
            laundry,
            miniBar,
        } = valueObject

        return new ConsumptionDomainEntity({
            consumptionFood: consumptionFood.valueOf(),
            extra: extra.valueOf(),
            laundry: laundry.valueOf(),
            miniBar: miniBar.valueOf(),
        })
    }

    private exectueCheckOutAggregate(consumption: IConsumptionDomainEntity): Promise<ConsumptionDomainEntity | null> {
        return this.checkOutAggregate.addConsumption(consumption as IAddConsumption)
    }
}
