import {
    IUseCase,
    ValueObjectErrorHandler,
    ValueObjectException
} from "src/libs/sofka";
import {
    IReserveDomainService,
    IRoomDomainEntity,
    IStateUpdatedResponse,
    IUpdateState,
    ReserveAggregate,
    RoomDomainEntity,
    StateUpdatedEventPublisher,
    StateValueObject
} from "../../../../../domain";

export class UpdateStateUseCase<
    Command extends IUpdateState = IUpdateState,
    Response extends IStateUpdatedResponse = IStateUpdatedResponse
> extends ValueObjectErrorHandler implements IUseCase<Command, Response>
{
    private readonly reserveAggregate: ReserveAggregate;

    constructor(
        private readonly reserveService: IReserveDomainService,
        private readonly stateUpdatedEventPublisher: StateUpdatedEventPublisher
    ) {
        super();
        this.reserveAggregate = new ReserveAggregate({
            reserveService,
            stateUpdatedEventPublisher
        })
    }

    async execute(command?: Command): Promise<Response> {
        const data = await this.executeCommand(command);

        return { success: data ? true : false, data } as unknown as Response
    }


    private async executeCommand(command: Command): Promise<IRoomDomainEntity | null> {
        const ValueObject = this.createValueObject(command);
        this.validateValueObject(ValueObject);
        const state = this.createNewState(ValueObject);
        return this.exectueReserveAggregate(state)
    }

    private createValueObject(command: Command): IRoomDomainEntity {
        const state = new StateValueObject(command.state);

        return {
            state,
        }
    }

    private validateValueObject(valueObject: IRoomDomainEntity): void {
        const {
            state,
        } = valueObject

        if (state instanceof StateValueObject && state.hasErrors())
            this.setErrors(state.getErrors());

        if (this.hasErrors() === true)
            throw new ValueObjectException(
                'Hay algunos errores en el comando ejecutado por UpdateStateUseCase',
                this.getErrors(),
            );
    }

    private createNewState(valueObject: IRoomDomainEntity): RoomDomainEntity {
        const {
            state,
            roomId,
        } = valueObject

        return new RoomDomainEntity({
            state: state,
            roomId: roomId.valueOf(),
        })
    }

    private exectueReserveAggregate(data: IRoomDomainEntity): Promise<RoomDomainEntity | null> {
        return this.reserveAggregate.updateState(data as IUpdateState)
    }
}
